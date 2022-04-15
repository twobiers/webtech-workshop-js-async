// Gegeben ist folgender Code. Aufgabe ist es den 
// Fehler in dem Promise.catch() abzufangen.
// Es gibt insgesamt 3 Möglichkeiten.

/**
 * Given is the following code. funcThatReturnsAPromise returns a promise 
 * and calls an errornouse function.
 * Your task is to rewrite the funcThatReturnsAPromise function in a form that
 * the thrown exceptions results in a promise rejection.
 * 
 * In total there exist 3 different ways to do so. Can you find all? 
 */

// DO NOT MODIFY THIS FUNCTION
const funcThatThrows = () => {
    throw new Error("Whops")
};

/**
 * @returns {Promise<number>}
 */
function funcThatReturnsAPromise() {
    funcThatThrows();
    return Promise.resolve(42);
}

// Test
funcThatReturnsAPromise()
    .catch(err => console.error(err)); // Catch doesn't catch