// Working of node js
/**
 * First you run your code
 * then the process it takes looks like:
 *                              Call Stack
 *                              Node APIs
 *                              Callback Queue
 * this whole process is known as Event loop
 * Node APIs and Callback Queue is not always used but Call Stack is used everytime.
 * 
 * 
 * Usage of Call stack:
 *  now you know the event-loop process but what is call stack or node apis or callback queue.......It's very simple
 * 
 * 
 * Call stack is used for storing functions and order or functions in its virtual register so node could know that which function will be executed first and the whole code is stored in main() function that runs in background
 * 
 * 
 * Node APIs will store those functions that we are inheriting from c++,c because node js is written in c,c++ and js so when the function we execute is not a part of core then that function will be stored in Node APIs section and after that the function will go to Callback Queue and then when the main() function left the call stack then those Callback Queue functions will come inside the call stack and then those functions will be executed from there 
 */

// Example of whole process 
console.log('starting server');

setTimeout(() => {
    console.log('After 2 sec');
}, 2000);

setTimeout(() => {
    console.log('After 0 sec');
}, 0);

console.log('stopping server')

// setTimeout() is actually we're inheritng from c++ thats why 0 sec will run after stopping server log