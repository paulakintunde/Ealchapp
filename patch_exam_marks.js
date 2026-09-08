const fs = require('fs');
let content = fs.readFileSync('./ealch-v2/app/exam.tsx', 'utf8');

// We need to count how many papers the user has actually attempted that were scored.
// A simple way is to count unique paperIds in their examResults that have a score.
// For now, any examResult logged means they used a mark (a mock paper is considered one mark).
// Wait, the "Mark" is typically consumed per exam paper submission.
content = content.replace(
  /const results = useProgress\(\(s\) => s\.examResults\);/,
  `const results = useProgress((s) => s.examResults);
  const marksUsedEver = new Set(results.map(r => r.paperId).filter(Boolean)).size;`
);

content = content.replace(
  /marksUsedEver: 0,/g,
  `marksUsedEver,`
);

fs.writeFileSync('./ealch-v2/app/exam.tsx', content);
