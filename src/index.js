import { setupTypeAcquisition } from "@typescript/ata";
import * as ts from "typescript";
console.log({ setupTypeAcquisition, ts });
// Create the function for running ATA with a series of callbacks
const ata = setupTypeAcquisition({
    projectName: "My ATA Project",
    typescript: ts,
    logger: console,
    delegate: {
        receivedFile: (path, code) => {
            // Add code to your runtime at the path...
        },
        started: () => {
            console.log("ATA start");
        },
        progress: (downloaded, total) => {
            console.log(`Got ${downloaded} out of ${total}`);
        },
        finished: vfs => {
            console.log("ATA done", vfs);
        },
    },
});
// Run that function with the new sourcefile
ata(`import danger from "danger"`);
