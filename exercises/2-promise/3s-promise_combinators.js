/**
 * 1 - Write a promise that resolves, when all promises are fulfilled and 
 *     prints the result
 */
 const givenPromisesTask1 = [
    Promise.resolve("Hello"),
    Promise.resolve("World"),
];

// Built-In solution
const allSuccessful = Promise.all(givenPromisesTask1)
    .then(res => console.log(res.join(", ") + "!"));

// Own solution as a unreadable but fancy reducer method
const allSuccesfulOwn = givenPromisesTask1
    .reduce((acc, curr) => acc.then(results => Promise.resolve(curr).then(res => [...results, res])), Promise.resolve([]))
    .then(res => console.log(res.join(", ") + "!"));

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

// Built-In solution (ES2021)
const anySuccessful = Promise.any(givenPromisesTask2)
    .then(res => console.log(res));

// Own solution
const anySuccesfulOwn = new Promise(
    (resolve, reject) => {
        let hasAlreadyResolved = false;
        let rejectionCnt = 0;
        givenPromisesTask2.map(promise => promise
            .then(res => {
                if(!hasAlreadyResolved) {
                    hasAlreadyResolved = true;
                    resolve(res);
                }
            })
            .catch(err => {
                rejectionCnt++;
                if(rejectionCnt === givenPromisesTask2.length) {
                    reject(err);
                }
            }));
    })
    .then(res => console.log(res));


/**
 * 3 - Write a promise that resolves, when all of the given promises are settled
 *     and prints the result.
 */
 const givenPromisesTask3 = [
    Promise.resolve("Hello"),
    Promise.reject(new Error()),
    Promise.resolve("World")
];

// Built-In (ES2020)
const allSettled = Promise.allSettled(givenPromisesTask3)
    .then(res => console.log(res));

// Own
const allSettledOwn = givenPromisesTask3
    .reduce((acc, curr) => acc.then(results => Promise.resolve(curr).then(res => [...results, res]).catch(err => [...results, err])), Promise.resolve([]))
    .then(res => console.log(res.join(", ") + "!"));

/**
 * 4 - Write a promise that resolves, when the first promise has been settled
 *     and prints the result
 *     Bonus: question: will always the same promise be printed? 
 */
 const givenPromisesTask4 = [
    new Promise((resolve, reject) => setTimeout(() => resolve("Hello"), 100)),
    new Promise((resolve, reject) => setTimeout(() => resolve("World"), 100)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error()), 100))
];

// Built-In
const firstSettled = Promise.race(givenPromisesTask4)
    .then(res => console.log(res));


// Own solution
const firstSettledOwn = new Promise(
    (resolve, reject) => {
        let hasAlreadyResolved = false;
        givenPromisesTask4.map(promise => promise
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