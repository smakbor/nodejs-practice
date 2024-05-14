// const os = require("os");

// // Total system memory
// const totalMemory = os.totalmem();

// // Free memory available
// const freeMemory = os.freemem();

// // Used memory
// const usedMemory = totalMemory - freeMemory;

// console.log(`Total Memory: ${totalMemory / (1024 * 1024)} MB`);
// console.log(`Free Memory: ${freeMemory / (1024 * 1024)} MB`);
// console.log(`Used Memory: ${usedMemory / (1024 * 1024)} MB`);

const { exec } = require("child_process");

// Function to get list of running processes
function listRunningProcesses() {
    return new Promise((resolve, reject) => {
        exec("ps aux", (error, stdout, stderr) => {
            if (error) {
                reject(error);
                return;
            }
            resolve(stdout);
        });
    });
}

// Function to end a specific process by PID
function endProcess(pid) {
    return new Promise((resolve, reject) => {
        exec(`kill ${pid}`, (error, stdout, stderr) => {
            if (error) {
                reject(error);
                return;
            }
            resolve(stdout);
        });
    });
}

// Example usage
async function main() {
    try {
        // Get list of running processes
        const processes = await listRunningProcesses();
        console.log(processes);

        // End a specific process (Replace PID with the process ID you want to terminate)
        // const pidToTerminate = 1234; // Example PID
        // await endProcess(pidToTerminate);
        // console.log(`Process with PID ${pidToTerminate} terminated.`);
    } catch (error) {
        console.error("Error:", error);
    }
}

main();
