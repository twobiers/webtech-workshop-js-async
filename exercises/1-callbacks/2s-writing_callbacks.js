// #reqion typedef
/** 
 * @callback FutureCallback
 * @returns {void}
 */
// #endregion

/**
 * Synchronous (Using a blocking loop)
 * @param {Date | number} date 
 * @param {FutureCallback} cb 
 */
function callInFutureSync(date, cb) {
    const now = Date.now();
    while(now < date) {}
    cb();
}

/** Synchronous (Using a recursive call)
 * Keep in mind, this will blow up the stack. Try it with different dates and find your 
 * browsers call stack limit
 * @param {Date | number} date 
 * @param {FutureCallback} cb 
 */
function callInFutureSync(date, cb) {
    const now = Date.now();
    if(now < date) {
        callInFutureSync(date, cb);
    } else {
        cb();
    }
}

/**
 * Asychnronous (Using setTimeout)
 * @param {Date | number} date 
 * @param {FutureCallback} cb 
 */
function callInFutureAsync(date, cb) {
    const now = Date.now();
    const delay = date - now;

    setTimeout(cb, delay);
}

/**
 * Asynchrnous (Using setInterval)
 * However, it could be called multiple times
 * @param {Date | number} date 
 * @param {FutureCallback} cb 
 */
function callInFutureAsync(date, cb) {
    setInterval(() => {
        const now = Date.now();
        const precision = 1000;
        const stripPrecision = (d) => Math.floor(d / precision);
        if(stripPrecision(date) === stripPrecision(now)) {
            cb();
        }
    }, 100);
}