# Test Yargs next

## Issue description

The second parameter of yargs.commandDir is an object that contains the configuration for the commands in the directory.

The first parameter of opts.visit is command, this command is not extensible. So if I want to add a global middleware, I must guarantee that the middlewares key exists in the command file.

```js
export const command = "test1";
export const desc = "test1";
export const builder = {};
export const middlewares = []; // Comment out this line of code will cause errors

export const handler = function (argv) {
  console.log("argv", argv);
  console.log("1 + 1 =", argv.$utils.sum(1, 1));
};
```

```js
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
```

## Discussion

Making the input command parameter in opts.visit extensible would result in cleaner command files and more powerful handler functionality.
