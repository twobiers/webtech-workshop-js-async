/**
 * Synchronous (Using a blocking loop)
 * @param {Date} date 
 * @param {FutureCallback} cb 
 */
 function callInFutureSync(date, cb) {
    const now = Date.now();
    while(now < date) {}
    cb();
}

/**
 * Asychnronous (Using setTimeout)
 * @param {Date} date 
 * @param {FutureCallback} cb 
 */
 function callInFutureAsync(date, cb) {
    const now = Date.now();
    const delay = date - now;

    setTimeout(cb, delay);
}

callInFutureAsync(Date.now() + 2000, () => {
    console.log("2 Seconds in future");
});