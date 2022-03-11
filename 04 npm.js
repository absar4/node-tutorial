/**
 * NPM is a package manager for Node.js packages, or modules if you like.
 * www.npmjs.com hosts thousands of free packages to download and use.
 * The NPM program is installed on your computer when you install Node.js
 * NPM is already ready to run on your computer!
 * what is a package? =>A package in Node.js contains all the files you need for a module.
 * Modules are JavaScript libraries you can include in your project.
 * package details are in package.json file.
 */

// Installing your first package
// npm install upper-case
// var http = require('http');
// var uc = require('upper-case');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write(uc.upperCase("Hello World!"));
//   res.end();
// }).listen(8000);


const chalk = require('chalk');
// import chalk from 'chalk';

console.log(chalk.blue.bgRed.bold('Hello world!'));
const log = console.log;

// Combine styled and normal strings
log(chalk.blue('Hello') + ' World' + chalk.red('!'));

// Compose multiple styles using the chainable API
log(chalk.blue.bgRed.bold('Hello world!'));

// Pass in multiple arguments
log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

// Nest styles
log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

// Nest styles of the same type even (color, underline, background)
log(chalk.green(
    'I am a green line ' +
    chalk.blue.underline.bold('with a blue substring') +
    ' that becomes green again!'
));

// ES2015 template literal
log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);


// Use RGB colors in terminal emulators that support it.
log(chalk.keyword('orange')('Yay for orange colored text!'));
log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
log(chalk.hex('#DEADED').bold('Bold gray!'));