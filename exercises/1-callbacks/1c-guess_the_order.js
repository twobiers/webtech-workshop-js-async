/**
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

setTimeout(first, 0);
setTimeout(second, 0);