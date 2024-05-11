// const fs = require("fs");
// const http = require("http");
// const crypto = require("crypto");
// const express = require("express");
// const multer = require("multer");
// const path = require("path");
// const { Server } = require("socket.io");
// const data = require("./MOCK_DATA.json");

// const app = express();
// const server = http.createServer(app);

// const port = 8000;

// app.use(express.static(path.resolve("./public")));
// // console.log(express);
// // console.log(crypto);

// // app.use(express.urlencoded({ extended: false }));

// //SOCKET.IO
// const io = new Server(server);
// io.on("connection", (socket) => {
//     // console.log("a user connected !", `id:${socket.id}`);
//     socket.on("message", (message) => {
//         io.emit("message", message);
//         console.log(message);
//     });
// });
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, "./temp");
//     },
//     filename: function (req, file, cb) {
//         console.log(file);
//         const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//         cb(null, file.originalname);
//     },
// });

// const upload = multer({ storage: storage });

// app.use((req, res, next) => {
//     console.log(`${req.method}: ${req.url}`);
//     next();
// });

// app.use("/", (req, res) => {
//     res.sendFile("/public/index.html");
// });

// app.get("/test", (req, res) => {
//     // res.json(data);
//     return res.json({ message: `Hello ${process.pid}` });
// });
// app.get("pid", (req, res) => {
//     return res.json({ message: `Hello ${process.pid}` });
// });
// const middlewareFunction = (req, res, next) => {
//     req.username = "SM Akbor";
//     next();
// };
// app.get("/about", (req, res) => {
//     res.send("Hello world");
// });
// app.post("/file", upload.single("avater"), (req, res) => {
//     console.log(req.body);
//     res.send("File Uploaded Successfully");
// });
// app.use(middlewareFunction);
// app.get("/html", (req, res) => {
//     fs.readFile("navbar.html", "utf-8", (err, data) => {
//         res.send(data);
//     });
// });

// server.listen(port, () => {
//     console.log("Server is running on Port:8000");
// });
