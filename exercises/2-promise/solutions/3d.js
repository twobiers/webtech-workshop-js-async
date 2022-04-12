/**
 * 4 - Write a promise that resolves, when the first promise has been settled
 *     and prints the result
 *     Bonus: question: will always the same promise be printed? 
 */
import { givenPromises } from "../3d-promise_combinators";

// Built-In
const firstSettled = Promise.race(givenPromises)
    .then(res => console.log(res));


// Own solution
const firstSettledOwn = new Promise(
    (resolve, reject) => {
        let hasAlreadyResolved = false;
        givenPromises.map(promise => promise
            .then(res => {
                if(!hasAlreadyResolved) {
                    hasAlreadyResolved = true;
                    resolve(res);
                }
            })
            .catch(err => {
                if(!hasAlreadyResolved) {
                    hasAlreadyResolved = true;
                    reject(err);
                }
            }));
    })
    .then(res => console.log(res));