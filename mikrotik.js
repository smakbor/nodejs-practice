// // import * as MikroNode from "mikrotik";
// const MikroNode = require("mikrotik");
// const host = "netfee.live:2006";
// const username = "razzak";
// const password = "123456"; // Hope that's not your real password ;)
// const connection = MikroNode.getConnection(host, username, password, {
//     closeOnDone: true,
// });
// connection
//     .getConnectPromise()
//     .then(function (conn) {
//         conn.getCommandPromise("/ip/address/print").then(
//             (addresses) => {
//                 for (const address of addresses) {
//                     console.info(
//                         `Address: ${address.address} on ${address.interface}`
//                     );
//                 }
//             },
//             (reason) => {
//                 console.log(
//                     "Error while running command: " + JSON.stringify(reason)
//                 );
//             }
//         );
//     })
//     .catch((reason) => {
//         console.log("Error while connecting: " + JSON.stringify(reason));
//     });

// for (let i = 7; i > 6; i++) {
//     console.log("first");
// }
