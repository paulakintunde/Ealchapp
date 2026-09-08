const fs = require('fs');
let content = fs.readFileSync('./ealch-v2/app/exam.tsx', 'utf8');

// Replace the comment and entitled variable to check both examiner and marks
content = content.replace(
  /const entitled = useFeature\('examiner'\);/g,
  `const entitled = useFeature('examiner') || useFeature('marks');`
);

content = content.replace(
  /\/\/ TODO: proper metered marks check/g,
  ``
);

fs.writeFileSync('./ealch-v2/app/exam.tsx', content);
