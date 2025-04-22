import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Copy necessary files to dist
const filesToCopy = [
  'robots.txt',
  'sitemap.xml'
];

filesToCopy.forEach(file => {
  const sourcePath = path.join(__dirname, '../public', file);
  const destPath = path.join(__dirname, '../dist', file);
  
  if (fs.existsSync(sourcePath)) {
    fs.copyFileSync(sourcePath, destPath);
    console.log(`✓ Copied ${file}`);
  }
});

// For Vercel, create a vercel.json if it doesn't exist
const vercelConfig = {
  "version": 2,
  "routes": [
    {
      "handle": "filesystem"
    },
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
};

fs.writeFileSync(
  path.join(__dirname, '../vercel.json'),
  JSON.stringify(vercelConfig, null, 2)
);

console.log('✓ Created vercel.json configuration');

