const fs = require("fs");

// fs.writeFileSync("./test.txt", "This is test file");

// // read file synchronously
// const readFileSync = fs.readFileSync("./demo.txt", "utf-8");
// // console.log(readFileSync);

// // read file asynchronously

// const readFileAsync = fs.readFile("./demo.txt", "ut-8", (err, data) => {
//     console.log(data);
// });
// console.log(readFileAsync);

// append something into the file
fs.appendFileSync("./demo.txt", "hello 2\n");

/// copy a file
fs.cpSync("./demo.txt", "./main.txt");

// delete a file
fs.unlinkSync("./main.txt");
