#!/usr/bin/env bash
# Ealch v2 — one-shot backend provisioning.
# Creates (or reuses) the Supabase project, applies schema + seeds, sets Edge
# Function secrets, deploys coach + tts, and writes the app's .env.
#
# Required env (put them in .env.backend — gitignored — and `source` it):
#   SUPABASE_ACCESS_TOKEN   sbp_… personal access token
#   NVIDIA_API_KEY          active LLM provider
# Optional:
#   NVIDIA_AI_MODEL NVIDIA_ENABLE_THINKING OPENROUTER_API_KEY OPENROUTER_MODEL
#   AI_API_URL AI_API_KEY AI_API_MODEL ANTHROPIC_API_KEY
#   FISH_AUDIO_API_KEY TTS_API_URL TTS_API_KEY TTS_PROVIDER TTS_MODEL TTS_VOICE TTS_FORMAT
#   SUPABASE_PROJECT_NAME (default ealch) SUPABASE_REGION (default eu-west-3)
set -euo pipefail

API=https://api.supabase.com/v1
AUTH="Authorization: Bearer ${SUPABASE_ACCESS_TOKEN:?set SUPABASE_ACCESS_TOKEN}"
NAME="${SUPABASE_PROJECT_NAME:-ealch}"
REGION="${SUPABASE_REGION:-eu-west-3}"
cd "$(dirname "$0")/.."

say() { printf '\n\033[1;36m▸ %s\033[0m\n' "$*"; }

say "Looking for existing project '$NAME'…"
REF=$(curl -sf "$API/projects" -H "$AUTH" | node -e "
  let d='';process.stdin.on('data',c=>d+=c).on('end',()=>{
    const p=JSON.parse(d).find(p=>p.name==='$NAME');
    if(p)process.stdout.write(p.id);});")

if [ -z "$REF" ]; then
  say "Creating project '$NAME' in $REGION…"
  ORG=$(curl -sf "$API/organizations" -H "$AUTH" | node -e "
    let d='';process.stdin.on('data',c=>d+=c).on('end',()=>process.stdout.write(JSON.parse(d)[0].id));")
  DB_PASS=$(openssl rand -base64 24 | tr -d '/+=')
  REF=$(curl -sf -X POST "$API/projects" -H "$AUTH" -H "Content-Type: application/json" -d "{
      \"organization_id\": \"$ORG\",
      \"name\": \"$NAME\",
      \"region\": \"$REGION\",
      \"db_pass\": \"$DB_PASS\"
    }" | node -e "let d='';process.stdin.on('data',c=>d+=c).on('end',()=>process.stdout.write(JSON.parse(d).id));")
  echo "  project ref: $REF"
  echo "  db password: $DB_PASS   ← save this"
  say "Waiting for project to become healthy…"
  for i in $(seq 1 60); do
    STATUS=$(curl -sf "$API/projects/$REF" -H "$AUTH" | node -e "
      let d='';process.stdin.on('data',c=>d+=c).on('end',()=>process.stdout.write(JSON.parse(d).status||''));")
    [ "$STATUS" = "ACTIVE_HEALTHY" ] && break
    sleep 10
  done
else
  echo "  found: $REF"
fi

say "Applying schema.sql + seed.sql…"
for f in supabase/schema.sql supabase/seed.sql; do
  node -e "
    const fs=require('fs');
    const q=fs.readFileSync('$f','utf8');
    fetch('$API/projects/$REF/database/query',{method:'POST',
      headers:{'Authorization':'Bearer '+process.env.SUPABASE_ACCESS_TOKEN,'Content-Type':'application/json'},
      body:JSON.stringify({query:q})})
      .then(async r=>{if(!r.ok){console.error('$f failed:',r.status,await r.text());process.exit(1)}
        console.log('  ✓','$f')});"
done

say "Setting Edge Function secrets…"
SECRETS='[]'
add() { [ -n "${2:-}" ] && SECRETS=$(node -e "
  const s=JSON.parse(process.argv[1]);s.push({name:process.argv[2],value:process.argv[3]});
  console.log(JSON.stringify(s));" "$SECRETS" "$1" "$2"); }
add NVIDIA_API_KEY        "${NVIDIA_API_KEY:-}"
add NVIDIA_AI_MODEL       "${NVIDIA_AI_MODEL:-}"
add NVIDIA_ENABLE_THINKING "${NVIDIA_ENABLE_THINKING:-}"
add OPENROUTER_API_KEY    "${OPENROUTER_API_KEY:-}"
add OPENROUTER_MODEL      "${OPENROUTER_MODEL:-}"
add AI_API_URL            "${AI_API_URL:-}"
add AI_API_KEY            "${AI_API_KEY:-}"
add AI_API_MODEL          "${AI_API_MODEL:-}"
add ANTHROPIC_API_KEY     "${ANTHROPIC_API_KEY:-}"
add FISH_AUDIO_API_KEY    "${FISH_AUDIO_API_KEY:-}"
add TTS_API_URL           "${TTS_API_URL:-}"
add TTS_API_KEY           "${TTS_API_KEY:-}"
add TTS_PROVIDER          "${TTS_PROVIDER:-}"
add TTS_MODEL             "${TTS_MODEL:-}"
add TTS_VOICE             "${TTS_VOICE:-}"
add TTS_FORMAT            "${TTS_FORMAT:-}"
curl -sf -X POST "$API/projects/$REF/secrets" -H "$AUTH" -H "Content-Type: application/json" \
  -d "$SECRETS" > /dev/null && echo "  ✓ secrets set"

say "Deploying Edge Functions…"
npx --yes supabase functions deploy coach --project-ref "$REF" --no-verify-jwt
npx --yes supabase functions deploy tts   --project-ref "$REF" --no-verify-jwt

say "Fetching anon key + writing .env…"
ANON=$(curl -sf "$API/projects/$REF/api-keys" -H "$AUTH" | node -e "
  let d='';process.stdin.on('data',c=>d+=c).on('end',()=>{
    const k=JSON.parse(d).find(k=>k.name==='anon');process.stdout.write(k?k.api_key:'');});")
cat > .env <<EOF
EXPO_PUBLIC_SUPABASE_URL=https://$REF.supabase.co
EXPO_PUBLIC_SUPABASE_ANON_KEY=$ANON
EOF
echo "  ✓ .env written (url + anon key)"

say "Smoke-testing coach function…"
curl -s "https://$REF.supabase.co/functions/v1/coach" \
  -H "Authorization: Bearer $ANON" -H "Content-Type: application/json" \
  -d '{"messages":[{"role":"user","content":"Pourquoi « je voudrais » et pas « je veux » ?"}],"lang":"en"}' | head -c 600
echo

say "Done. Project: https://supabase.com/dashboard/project/$REF"
