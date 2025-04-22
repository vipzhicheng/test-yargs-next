import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import path from "node:path";
const yargsObj = yargs(hideBin(process.argv));

yargsObj.commandDir("commands"); // <-- works
// yargsObj.commandDir(path.resolve(process.env.HOME, "commands")); // <-- not work

yargsObj.parse();
