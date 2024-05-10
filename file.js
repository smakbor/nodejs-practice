const fs = require("fs");

// fs.writeFileSync("./test.txt", "This is test file");

/*
 **** READ FILE SYNCHRONOUSLY *********
 */
// const readFileSync = fs.readFileSync("./demo.txt", "utf-8");
// // console.log(readFileSync);

/*
 **** READ FILE ASYNCHRONOUSLY *********
 */

// const readFileAsync = fs.readFile("./demo.txt", "ut-8", (err, data) => {
//     console.log(data);
// });
// console.log(readFileAsync);

/*
 **** APPEND SOMETHING INTO A FILE  *********
 */
fs.appendFileSync("./demo.txt", "hello 2\n");

/// copy a file
fs.cpSync("./demo.txt", "./main.txt");

/*
 **** DELETE A FILE *********
 */

// fs.unlinkSync("./main.txt");

fs.unlink("./main.txt", (err) => {
    if (err) throw err;
    console.log("File deleted successfully");
});
