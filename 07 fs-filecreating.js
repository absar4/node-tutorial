/**
 * file system that will take inputs from command line and create or delete file according to 
 * their input 
 * we'll use file system module in this simple Application
 */

// const fs = require('fs');
// const input = process.argv; // returns node filename.js .. .. .. as arguments 
/**
 * 👀⏩ fs.writeFileSync() for creating files
 * 👀⏩ first argument take filename
 * 👀⏩ second argument take file content
 */
// fs.writeFileSync(input[2],input[3]);  


// ==================================
//👀⏩ NOW LET'S TAKE THIS APP into NEXT LEVEL 


const fs = require('fs');
const input = process.argv;

if(input[2]=='add'){
    fs.writeFileSync(input[3],input[4]);
}else if (input[2]=='remove') {
    fs.unlinkSync(input[3]);
} else {
    console.log('wrong input');
}