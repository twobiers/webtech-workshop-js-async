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
 * Asynchrnous (Using setInterval)
 * @param {Date} date 
 * @param {FutureCallback} cb 
 */
 function callInFutureAsync(date, cb) {
    const intervalID = setInterval(() => {
        const now = Date.now();
        if(now >= date) {
            cb();
            // Remember to clear your interval otherwise this will run forever.
            clearInterval(intervalID);
        }
    }, 100);
}

callInFutureAsync(Date.now() + 2000, () => {
    console.log("2 Seconds in future");
});