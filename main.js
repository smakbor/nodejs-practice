const fs = require("fs");
const crypto = require("crypto");
const express = require("express");
const data = require("./MOCK_DATA.json");

const port = 8000;
// console.log(express);
// console.log(crypto);
const app = express();
app.get("/", (req, res) => {
    // res.json(data);
    res.end("hello world");
});
app.get("/html", (req, res) => {
    fs.readFile("navbar.html", "utf-8", (err, data) => {
        res.send(data);
    });
});
app.listen(port, () => {
    console.log("Server is running on Port:8000");
});
