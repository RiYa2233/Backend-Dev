const fs = require("fs");

// command line arguments
const command = process.argv[2];
const fileName = process.argv[3];
const content = process.argv[4];

switch (command) {

    case "read":
        fs.readFile(fileName, "utf-8", (err, data) => {
            if (err) {
                console.log("Error:", err.message);
            } else {
                console.log("File Content:\n", data);
            }
        });
        break;

    case "write":
        fs.writeFile(fileName, content || "", (err) => {
            if (err) {
                console.log("Error:", err.message);
            } else {
                console.log("File written successfully");
            }
        });
        break;

    case "copy":
        const destination = process.argv[4];
        fs.copyFile(fileName, destination, (err) => {
            if (err) {
                console.log("Error:", err.message);
            } else {
                console.log("File copied successfully");
            }
        });
        break;

    case "delete":
        fs.unlink(fileName, (err) => {
            if (err) {
                console.log("Error:", err.message);
            } else {
                console.log("File deleted successfully");
            }
        });
        break;

    case "list":
        fs.readdir(fileName || ".", (err, files) => {
            if (err) {
                console.log("Error:", err.message);
            } else {
                console.log("Directory contents:");
                files.forEach(file => console.log(file));
            }
        });
        break;

    default:
        console.log(`
Commands:
node fileManager.js read filename
node fileManager.js write filename "content"
node fileManager.js copy source.txt destination.txt
node fileManager.js delete filename
node fileManager.js list foldername
        `);
}
