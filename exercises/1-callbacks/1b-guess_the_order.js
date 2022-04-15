/**
 * Imagine you execute this script file. In which order messages will be 
 * logged into the console?
 * Try to guess the order the output occurs from your understanding
 * and then validate your guess by running the code.
 */
// Function definitions
function first() {
    console.log("First");
}

function second() {
    console.log("Second");
}

setTimeout(second, 0);
first();

// My Guess:
// 1. 
// 2.