const sum = (a, b) => {
    let res = a + b;
    console.log(res);
};
sum(4, 5);
module.exports = sum;

const express = require("express");
const app = express();

app.get("/pid", (req, res) => {
    return res.json({ message: `Process id is ${process.pid}` });
});

app.listen(7000, () => {
    console.log("server is running prot 7000");
});
