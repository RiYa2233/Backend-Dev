const fs = require("fs");
const path = require("path");

const sourceDir = path.join(__dirname, "source");
const destDir = path.join(__dirname, "destination");
fs.readdir(sourceDir, (err, files) => {
    if (err) {
        console.log("Error reading source directory:", err.message);
        return;
    }
    files.forEach((file) => {
        const sourceFile = path.join(sourceDir, file);
        const destFile = path.join(destDir, file);
        fs.access(destFile, fs.constants.F_OK, (err) => {
            if (err) {
                
                fs.copyFile(sourceFile, destFile, (err) => {
                    if (err) {
                        console.log("Error copying file:", err.message);
                    } else {
                        console.log(`Copied: ${file}`);
                    }
                });
            } else {
                console.log(`Already exists: ${file}`);
            }
        });
    });
});
