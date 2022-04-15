/** 
 *  1 - Create a promise that counts up from 1 to 20 and logs the
 *      numbers. 
 *      If the counter passes a 13, the promise should reject. 
 *      If the counter passes 20, the promise should fulfill.
 *      
 *      Before you run your solution think about whether it will 
 *      log the numbers to 20 or 13?
 */
const promiseBadLuck = new Promise((resolve, reject) => {
    // Your solution here
});

// Test
promiseBadLuck
    .then(res => console.log(`Fulfilled with: ${res}`))
    .catch(rej => console.log(`Rejected with: ${rej}`));