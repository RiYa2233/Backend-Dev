const fs = require("fs");
const path = require("path");

const logFilePath = path.join(__dirname, "log.txt");
const reportFilePath = path.join(__dirname, "report.txt");

let totalLines = 0;
let errorCount = 0;
let infoCount = 0;

const readStream = fs.createReadStream(logFilePath, {
    encoding: "utf-8"
});

readStream.on("data", (chunk) => {
    const lines = chunk.split("\n");

    lines.forEach(line => {
        if (line.trim() !== "") {
            totalLines++;

            if (line.includes("ERROR")) {
                errorCount++;
            }
            if (line.includes("INFO")) {
                infoCount++;
            }
        }
    });
});

readStream.on("end", () => {
    const report = `
Log File Analysis Report
------------------------
Total Entries: ${totalLines}
INFO Count: ${infoCount}
ERROR Count: ${errorCount}
    `;

    fs.writeFileSync(reportFilePath, report);
    console.log("Log analysis completed. Report generated.");
});

readStream.on("error", (err) => {
    console.log("Error reading file:", err.message);
});
