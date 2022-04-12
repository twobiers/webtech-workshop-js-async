/**
 * 1 - Write a promise that resolves, when all promises are fulfilled and 
 *     prints the result
 */
import { givenPromises } from "../3a-promise_combinators.js";

// Built-In solution
const allSuccessful = Promise.all(givenPromises)
    .then(res => console.log(res.join(", ") + "!"));

// Own solution as a unreadable but fancy reducer method
const allSuccesfulOwn = givenPromises
    .reduce((acc, curr) => acc.then(results => Promise.resolve(curr).then(res => [...results, res])), Promise.resolve([]))
    .then(res => console.log(res.join(", ") + "!"));

