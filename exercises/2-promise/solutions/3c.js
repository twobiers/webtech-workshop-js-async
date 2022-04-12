/**
 * 3 - Write a promise that resolves, when all of the given promises are settled
 *     and prints the result.
 */
 import { givenPromises } from "../3c-promise_combinators";

// Built-In (ES2020)
const allSettled = Promise.allSettled(givenPromises)
    .then(res => console.log(res));

// Own
const allSettledOwn = givenPromises
    .reduce((acc, curr) => acc.then(results => Promise.resolve(curr).then(res => [...results, res]).catch(err => [...results, err])), Promise.resolve([]))
    .then(res => console.log(res.join(", ") + "!"));