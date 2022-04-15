/**
 *  2 - Promisify the {@link https://developer.mozilla.org/en-US/docs/Web/API/setTimeout setTimeout} Web API
 */

/**
 * This function returns a promisified setTimeout
 * @param {number} duration duration in milliseconds
 * @returns {Promise<any>}
 */
function promiseTimeout(duration) {
    // Your solution here
}

// Test
promiseTimeout(2000)
    .then(() => console.log("Hello from the future"))
    .catch(rej => console.log(`Rejected with: ${rej}`));