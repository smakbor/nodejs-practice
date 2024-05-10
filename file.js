const fs = require("fs");
const os = require("os");
const http = require("http");

const myServer = http.createServer((req, res) => {
    const log = `${Date.now()} and ${req.url} is the req log\n`;
    fs.appendFile("log.txt", log, (err, data) => {
        switch (req.url) {
            case "/":
                res.end("This is home pages");
                break;
            case "/about":
                res.end("this is the about page");
                break;
            default:
                res.end("404 Not Found");
        }
    });
});
myServer.listen(8000, () => {
    console.log("Server is running on port:8000");
});
// const mongoose = require("mongoose");
// console.log(mongoose.Query);

// console.log(os.cpus().forEach((item) => console.log(item.times.user)));
// console.log(os.machine());

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
// fs.appendFileSync("./demo.txt", "hello 2\n");

/// copy a file
// fs.cpSync("./demo.txt", "./main.txt");

/*
 **** DELETE A FILE *********
 */

// fs.unlinkSync("./main.txt");

// fs.unlink("./main.txt", (err) => {
//     if (err) throw err;
//     console.log("File deleted successfully");
// });

/*
 **** STAT A FILE *********
 */
// let stat = fs.statSync("./demo.txt");
// console.log(stat);

/*
 **** UNDERSTANDING ASYNCHRONOUS AND SYNCHRONOUS *********
 */

// console.log("hello world ");
// const readFile = fs.readFileSync("demo.txt", "utf8");
// console.log(readFile);

// console.log("hello world 4");

// console.log("data 1");
// console.log("data 2");

// fs.readFile("demo.txt", "utf8", (err, data) => {
//     console.log(data);
// });

// console.log("data 3");
// console.log("data 4");
