# Test Yargs next


## Step 1

```
pnpm install
node index.js --help
```

It works perfectly.

## Step 2

Than copy `commands` dir to home directory and change code

```diff
- yargsObj.commandDir("commands"); // <-- works
- // yargsObj.commandDir(path.resolve(process.env.HOME, "commands")); // <-- not work
+ // yargsObj.commandDir("commands"); // <-- works
+ yargsObj.commandDir(path.resolve(process.env.HOME, "commands")); // <-- not work
```

run command tool again.

```
node index.js --help
```

It will produce following error:

```
node:fs:1584
  const result = binding.readdir(
                         ^

Error: ENOENT: no such file or directory, scandir '/Users/zhicheng/Sites/try_yargs/test/Users/zhicheng/commands'
    at Object.readdirSync (node:fs:1584:26)
    at CommandInstance.addDirectory (file:///Users/zhicheng/Sites/try_yargs/test/node_modules/.pnpm/yargs@18.0.0-candidate.4/node_modules/yargs/build/lib/command.js:23:33)
    at YargsInstance.commandDir (file:///Users/zhicheng/Sites/try_yargs/test/node_modules/.pnpm/yargs@18.0.0-candidate.4/node_modules/yargs/build/lib/yargs-factory.js:293:67)
    at file:///Users/zhicheng/Sites/try_yargs/test/index.js:7:10
    at ModuleJob.run (node:internal/modules/esm/module_job:271:25)
    at async onImport.tracePromise.__proto__ (node:internal/modules/esm/loader:578:26)
    at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:116:5) {
  errno: -2,
  code: 'ENOENT',
  syscall: 'scandir',
  path: '/Users/zhicheng/Sites/try_yargs/test/Users/zhicheng/commands'
}
```
