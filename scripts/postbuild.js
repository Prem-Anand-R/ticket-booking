const fs = require('fs');
const path = require('path');

// Copy necessary files to dist
const filesToCopy = [
  '_redirects',      // For Netlify
  'robots.txt',
  'sitemap.xml'
];

filesToCopy.forEach(file => {
  if (fs.existsSync(path.join(__dirname, '../public', file))) {
    fs.copyFileSync(
      path.join(__dirname, '../public', file),
      path.join(__dirname, '../dist', file)
    );
  }
});

// Create _redirects file for SPA routing (Netlify)
fs.writeFileSync(
  path.join(__dirname, '../dist', '_redirects'),
  '/* /index.html 200'
);