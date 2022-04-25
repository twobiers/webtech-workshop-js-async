/**
 * 2 - Write a promise that resolves, when any of the given promises are fulfilled
 *     and prints the result.
 *     Bonus: question: will always the same promise be printed? 
 */
 import { givenPromises } from "../3b-promise_combinators.js";

// Built-In solution (ES2021)
const anySuccessful = Promise.any(givenPromises)
    .then(res => console.log(res));

// Own solution
const anySuccesfulOwn = new Promise(
    (resolve, reject) => {
        let hasAlreadyResolved = false;
        let rejectionCnt = 0;
        givenPromises.map(promise => promise
            .then(res => {
                if(!hasAlreadyResolved) {
                    hasAlreadyResolved = true;
                    resolve(res);
                }
            })
            .catch(err => {
                rejectionCnt++;
                if(rejectionCnt === givenPromises.length) {
                    reject(err);
                }
            }));
    })
    .then(res => console.log(res));