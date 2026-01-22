const fs = require("fs");

fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.log("Error reading file");
    return;
  }

  const wordCount = data.split(/\s+/).length;

  const result = `Total words: ${wordCount}`;

  fs.writeFile("output.txt", result, (err) => {
    if (err) {
      console.log("Error writing file");
      return;
    }
    console.log("Word count written to output.txt");
  });
});
