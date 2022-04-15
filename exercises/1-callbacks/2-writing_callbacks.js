/** 
 * Writing Callbacks
 *  Write a function that accepts a date in the future and a parameterless callback function.
 *  The callback should be executed once the date has been passed.
 *  Try to implement a synchronous version and then translate it into an asynchronous version
 *  You can use the following Web-APIs:
 *      - setTimeout {@link https://developer.mozilla.org/en-US/docs/Web/API/setTimeout}
 *      - setInterval {@link https://developer.mozilla.org/en-US/docs/Web/API/setInterval}
 */

/**
 * Synchronous
 * @param {Date} date 
 * @param {FutureCallback} cb
 */
function callInFutureSync(date, cb) {
    // Your solution here
}

/**
 * Asynchronous
 * @param {Date} date 
 * @param {FutureCallback} cb 
 */
function callInFutureAsync(date, cb) {
    // Your solution here
}

// Test
callInFutureSync(Date.now() + 1000, () => {
    console.log("[Sync] Hello from the future.");
});

callInFutureAsync(Date.now() + 1000, () => {
    console.log("[Async] Hello from the future.");
});


/* #reqion(collapsed) typedef */

/** 
 * @callback FutureCallback
 * @returns {void}
 */

/* #endregion */