/**
 * Promise combinators.
 * Try to use the different promise combinators built in into JS, but also try
 * to implement a combinator on your own if you want to.
 */

/**
 * 1 - Write a promise that resolves, when all promises are fulfilled and 
 *     prints the result
 */
const givenPromisesTask1 = [
    Promise.resolve("Hello"),
    Promise.resolve("World"),
];

const allSuccessful; // Your promise (Built-In)
const allSuccessfulOwn; // Your promise (Own implementation)

/**
 * 2 - Write a promise that resolves, when any of the given promises are fulfilled
 *     and prints the result.
 *     Bonus: question: will always the same promise be printed? 
 */
const givenPromisesTask2 = [
    Promise.resolve("Hello"),
    Promise.reject(new Error()),
    Promise.resolve("World")
];

const anySuccessful; // Your promise (Built-In)
const anySuccessfulOwn; // Your promise (Own implementation)

/**
 * 3 - Write a promise that resolves, when all of the given promises are settled
 *     and prints the result.
 */
 const givenPromisesTask2 = [
    Promise.resolve("Hello"),
    Promise.reject(new Error()),
    Promise.resolve("World")
];

const allSettled; // Your promise (Built-In)
const allSettledOwn; // Your promise (Own implementation)

/**
 * 4 - Write a promise that resolves, when the first promise has been settled
 *     and prints the result
 *     Bonus: question: will always the same promise be printed? 
 */
 const givenPromisesTask2 = [
    new Promise((resolve, reject) => setTimeout(() => resolve("Hello"), 100)),
    new Promise((resolve, reject) => setTimeout(() => resolve("World"), 100)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error()), 100))
];

const firstSettled; // Your promise (Built-In)
const firstSettledOwn; // Your promise (Own implementation)


