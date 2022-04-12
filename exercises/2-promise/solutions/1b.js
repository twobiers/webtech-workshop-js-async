/**
 * 
 * @param {number} duration 
 * @returns {Promise<any>}
 */
 function promiseTimeout(duration) {
    if(duration < 0) {
        return Promise.reject(new Error("Duration cannot be negative"));
    }
    return new Promise((resolve, reject) => {
        setTimeout(resolve, duration);
    });
}

promiseTimeout(2000)
    .then(() => console.log("2 Seconds in future"));