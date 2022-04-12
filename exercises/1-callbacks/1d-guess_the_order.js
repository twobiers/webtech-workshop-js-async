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

function third() {
    console.log("Third");
}

function fourth() {
    console.log("Fourth");
}

function fith() {
    console.log("Fith");
}

function sixth() {
    console.log("Sixth");
}

console.log("Starting the Callback Hell");
setTimeout(() => {
    third();
    setTimeout(() => {
        second();
        setTimeout(() => {
            setTimeout(() => {
                fith();
            });
            fourth();
        });
        sixth();
    }, 0)
    first();
}, 0);