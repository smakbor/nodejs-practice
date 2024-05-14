const sysInfo = require("systeminformation");
const fs = require("fs");

// const srcDir = process.argv[2];
// const results = fs.readdir(srcDir);
// for (const name of results) {
//     console.log(name);
// }
// console.log(sysInfo);

sysInfo
    .audio()
    .then((data) => console.log(data))
    .catch((err) => {
        console.log(err);
    });

//system

// sysInfo
//     .system()
//     .then((data) => console.log(data))
//     .catch((err) => {
//         console.log(err);
//     });

// sysInfo
//     .bluetoothDevices()
//     .then((data) => console.log(data))
//     .catch((err) => {
//         console.log(err);
//     });

// console.log(sysInfo);
