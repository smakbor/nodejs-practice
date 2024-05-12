const sysInfo = require("systeminformation");

// console.log(sysInfo);

// sysInfo
//     .cpu()
//     .then((data) => console.log(data))
//     .catch((err) => {
//         console.log(err);
//     });

//system

// sysInfo
//     .system()
//     .then((data) => console.log(data))
//     .catch((err) => {
//         console.log(err);
//     });

sysInfo
    .cpu()
    .then((data) => console.log(data))
    .catch((err) => {
        console.log(err);
    });

// console.log(sysInfo);
