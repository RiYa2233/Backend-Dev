const os = require("os");
const fs = require("fs");

function logSystemInfo() {
  const cpu = os.cpus().length;
  const memory = (os.totalmem() / (1024 * 1024 * 1024)).toFixed(2);
  const freeMemory = (os.freemem() / (1024 * 1024 * 1024)).toFixed(2);
  const platform = os.platform();

  const logData = `
Time: ${new Date().toLocaleString()}
CPU Cores: ${cpu}
Total Memory: ${memory} GB
Free Memory: ${freeMemory} GB
Platform: ${platform}
-------------------------
`;

  fs.appendFileSync("system-log.txt", logData);
  console.log("System info logged...");
}

setInterval(logSystemInfo, 5000);
