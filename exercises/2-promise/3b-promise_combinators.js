/**
 * Promise combinators.
 * Try to use the different promise combinators built in into JS, but also try
 * to implement a combinator on your own if you want to.
 */

/**
 * 2 - Write a promise that resolves, when any of the given promises are fulfilled
 *     and prints the result.
 *     Bonus: question: will always the same promise be printed? 
 */
export const givenPromises = [
    Promise.resolve("Hello"),
    Promise.reject(new Error()),
    Promise.resolve("World")
];

let anySuccessful; // Your promise (Built-In)
let anySuccessfulOwn; // Your promise (Own implementation)