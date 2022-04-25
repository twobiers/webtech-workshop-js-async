/** 1 - Call in Future
 *  Write a function that accepts a date in the future and a parameterless callback function.
 *  The callback should be executed once the date has been passed
 *  Try to implement a synchronous version and then translate it into an asynchronous version
 *  You can use the following Web-APIs:
 *      - setTimeout {@link https://developer.mozilla.org/en-US/docs/Web/API/setTimeout}
 *      - setInterval {@link https://developer.mozilla.org/en-US/docs/Web/API/setInterval}
 */

// #reqion typedef
/** 
 * @callback FutureCallback
 * @returns {void}
 */
// #endregion
/**
 * Synchronous
 * @param {Date | number} date 
 * @param {FutureCallback} cb 
 */
function callInFutureSync(date, cb) {

}

/**
 * Asynchronous
 * @param {Date | number} date 
 * @param {FutureCallback} cb 
 */
function callInFutureAsync(date, cb) {

}