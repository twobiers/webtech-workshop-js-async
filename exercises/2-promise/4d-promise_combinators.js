/**
 * Promise combinators.
 * Try to use the different promise combinators built in into JS, but also try
 * to implement a combinator on your own if you want to.
 */

/**
 * 4 - Write a promise that resolves, when the first promise has been settled
 *     and prints the result
 *     Bonus: question: will always the same promise be printed? 
 */
export const givenPromises = [
    new Promise((resolve, reject) => setTimeout(() => resolve("Hello"), 100)),
    new Promise((resolve, reject) => setTimeout(() => resolve("World"), 100)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error()), 100))
];

let firstSettled; // Your promise (Built-In)
let firstSettledOwn; // Your promise (Own implementation)


