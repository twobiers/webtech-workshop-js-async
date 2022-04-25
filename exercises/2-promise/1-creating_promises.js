/** 
 *  1 - Create a promise that counts up from 1 to 20 and logs the
 *      numbers. But when the 13 is reached, a error should be thrown
 *      as it brings bad luck.
 *      Before you start: Will it count to 20 or 13?
 */
const promiseBadLuck = new Promise((resolve, reject) => {
    
});

/**
 *  2 - Promisify the setTimeout
 *      The promise should resolve into the string "World"
 *      Use a fixed timeout of 1000ms
 */
const promisedWorld = new Promise((resolve, reject) => {
    
});

/**
 * 3 - Promisify the sendGetHttpRequest function. 
 *     The promise should resolve into the response.
 *     A non-2xx response status should be treated as an error.
 */

//#reqion typedef

/** 
 * @callback RequestCallback
 * @param {XMLHttpRequest} obj - The response object
 */

//#endregion

/**
 * @param {number} status 
 * @returns {boolean}
 */
function is2xxStatus(status) {
    return Math.floor(status / 100) === 2;
}

/**
 * @param {string} url 
 * @param {RequestCallback} cb 
 */
function sendGetHttpRequest(url, cb) {
    const req = new XMLHttpRequest();
    req.onreadystatechange = function() {
        if(this.readyState === 4) {
            cb(this);
        }
    }
    req.open("GET", url, true);
    req.send();
}

/**
 * @param {string} url 
 * @returns {Promise<any>}
 */
function promisifyGetHttpRequest(url) {

};