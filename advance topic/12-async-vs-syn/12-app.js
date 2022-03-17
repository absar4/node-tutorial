// Asynchronous vs Synchronous
/**
 * In synchronous operations tasks are performed one at a time and only when one is completed, the following is unblocked. In other words, you need to wait for a task to finish to move to the next one. In asynchronous operations, on the other hand, you can move to another task before the previous one finishes.
 * 
 * Node js is Asynchronous runtime environemnt because javascript is an Asynchronous programming language
 */
// 👀⏩  Asynchronous Example

// console.log("start");
// setTimeout(() => {
//     console.log("process and logics");
// }, 2000);
// console.log("completed");

// let a = 10;
// let b = 0;

// setTimeout(() => {
//     b = 10;
// }, 2000);

// console.log(a + b);



// 👀⏩ How to handle Asynchronous Data in Node js

let a = 10;
let b = 0;
let loadingData = new Promise((resolve, reject) => {
    setTimeout(() => {
        b = 10;
        resolve(b)
    }, 2000);
});
loadingData.then((data) => {
    b = data;
    console.log(`${a} + ${b} = ${a + b}`);
});
