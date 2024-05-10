const fs = require("fs");
const crypto = require("crypto");
const express = require("express");
const multer = require("multer");
const data = require("./MOCK_DATA.json");

const port = 8000;
const app = express();
// console.log(express);
// console.log(crypto);

// app.use(express.urlencoded({ extended: false }));
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./temp");
    },
    filename: function (req, file, cb) {
        console.log(file);
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage });

app.use((req, res, next) => {
    console.log(`${req.method}: ${req.url}`);
    next();
});

app.get("/", (req, res) => {
    // res.json(data);
    res.end("hello world");
});

const middlewareFunction = (req, res, next) => {
    req.username = "SM Akbor";
    next();
};
app.get("/about", (req, res) => {
    res.send("Hello world");
});
app.post("/file", upload.single("avater"), (req, res) => {
    console.log(req.body);
    res.send("File Uploaded Successfully");
});
app.use(middlewareFunction);
app.get("/html", (req, res) => {
    fs.readFile("navbar.html", "utf-8", (err, data) => {
        res.send(data);
    });
});

app.listen(port, () => {
    console.log("Server is running on Port:8000");
});
