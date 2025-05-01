import yargs from "yargs";
import { hideBin } from "yargs/helpers";
const yargsObj = yargs(hideBin(process.argv));

const opts = {
  visit: (command) => {
    if (!command.middlewares) {
      // Need command extensible
      command.middlewares = [];
    }

    // For all commands to have a chance to inject whatever I want to inject.
    command.middlewares.unshift((argv) => {
      argv.$command = command;
      argv.$utils = {
        sum: (a, b) => a + b,
      };
    });

    if (command.middleware) {
      // Need command extensible
      command.middlewares.push(command.middleware);
    }

    return true;
  },
};

yargsObj.commandDir("commands", opts);

yargsObj.parse();
