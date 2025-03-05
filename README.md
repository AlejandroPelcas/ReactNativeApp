# ReactNativeApp

## Node.js 
What is it?
It's a RUNTIME that allows you to run JS on a server. Created in 2009.
Allows you to be full-stack using only JS!

_An async event driven JS runtime_

*NVM* node version manager

*npm* node package manager: Package manager for JS that comes with Node.js that helps manage and install packages (libraries) that you can use in you node apps. 

Creates a  `package.json` file that lists all your project dependencies (pacakges you've installed). 

It also allows you to define custome scripts in the package.json file such as:

```
"scripts": {
  "start": "node app.js",
  "test": "mocha"
}
```
and you can run the scripts with:
```
npm run start
npm run test
```

*Key npm Commands:*
_Install a package_: npm install <package-name>
_Install all dependencies listed in the package.json_: npm install
_Uninstall a package:_ npm uninstall <package-name>
_Update a package:_ npm update <package-name>

`global` is a global param you can define to be accessed anywhere on the code. 
One important one is `process.platform`

## Events 
`process.on(EVENT, CALLBACK_FUNCTION());`
Example: process.on('exit', fucntion() {
    // do functino() when the exit event occurs
})

## File System
const { readFile, readFileSync } = require('fs'); // import file system module

## Modules
You can use `require()` to import in older version and node and js but recently you can use `import / export `
