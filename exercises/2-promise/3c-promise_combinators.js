/**
 * Promise combinators.
 * Try to use the different promise combinators built in into JS, but also try
 * to implement a combinator on your own if you want to.
 */

/**
 * 3 - Write a promise that resolves, when all of the given promises are settled
 *     and prints the result.
 */
export const givenPromises = [
    Promise.resolve("Hello"),
    Promise.reject(new Error()),
    Promise.resolve("World")
];

let allSettled; // Your promise (Built-In)
let allSettledOwn; // Your promise (Own implementation)