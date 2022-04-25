/**
 * Promise combinators.
 * Try to use the different promise combinators built in into JS, but also try
 * to implement a combinator on your own if you want to.
 */

/**
 * 1 - Write a promise that resolves, when all promises are fulfilled and 
 *     prints the result
 */
export const givenPromises = [
    Promise.resolve("Hello"),
    Promise.resolve("World"),
];

let allSuccessful; // Your promise (Built-In)
let allSuccessfulOwn; // Your promise (Own implementation)
