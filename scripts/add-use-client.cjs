const fs = require('fs');
const files = [
  'BookingModal.tsx',
  'CoverMarquee.tsx',
  'Hero.tsx',
  'HowItWorks.tsx',
  'MetricsBand.tsx',
  'Navbar.tsx',
  'StickyMobileCTA.tsx',
  'TestimonialsAndFAQ.tsx',
  'CaseStudies.tsx',
  'ClosingCTA.tsx',
  'Footer.tsx',
  'FounderSection.tsx',
  'ProblemSection.tsx',
  'ServicesBento.tsx',
  'WhoWeWorkWith.tsx'
];

files.forEach(file => {
  const filePath = 'src/components/' + file;
  if (!fs.existsSync(filePath)) return;
  const content = fs.readFileSync(filePath, 'utf8');
  if (!content.trim().startsWith("'use client'")) {
    fs.writeFileSync(filePath, "'use client';\n" + content);
    console.log('Prepended use client to ' + file);
  }
});

