const { exec } = require("child_process");

// Function to check speaker condition on Windows
function checkSpeakerConditionWindows() {
    exec(
        'powershell "Get-WmiObject Win32_SoundDevice | Select-Object Status"',
        (error, stdout, stderr) => {
            if (error) {
                console.error("Error checking speaker condition:", error);
                return;
            }
            const output = stdout.toLowerCase();

            if (output.includes("ok")) {
                console.log("Speaker is working properly.");
            } else {
                console.log("Speaker may have issues. Status:", output);
            }
        }
    );
}

// Check speaker condition
checkSpeakerConditionWindows();
