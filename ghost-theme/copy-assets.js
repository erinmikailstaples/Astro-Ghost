import fs from 'fs';
import path from 'path';

const sourceDir = path.join(process.cwd(), '../ghost-erin-mikail/content/themes/erin-mikail-theme');
const destDir = path.join(process.cwd(), '../ghost-erin-mikail/content/themes/erin-mikail-theme/assets');

// Ensure the destination directory exists
if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

// Copy CSS files
fs.readdirSync(sourceDir).forEach(file => {
    if (path.extname(file) === '.css') {
        const sourcePath = path.join(sourceDir, file);
        const destPath = path.join(destDir, file);
        fs.copyFileSync(sourcePath, destPath);
        console.log(`Copied ${file} to ${destPath}`);
    }
});

// Copy other asset directories if needed
const assetDirs = ['fonts', 'images']; // Add any other directories you need to copy
assetDirs.forEach(dir => {
    const sourcePath = path.join(sourceDir, dir);
    const destPath = path.join(destDir, dir);
    if (fs.existsSync(sourcePath)) {
        fs.cpSync(sourcePath, destPath, { recursive: true });
        console.log(`Copied ${dir} directory to ${destPath}`);
    }
});

console.log('Asset copying complete');