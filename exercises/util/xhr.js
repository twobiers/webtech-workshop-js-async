import xhr from "xmlhttprequest-ssl";
const { XMLHttpRequest } = xhr;

/** 
 * Here is a generic example how to use the XMLHttpRequest, you can use
 * It takes an url as an argument and a callback function in error-first style
 * that gets executed once the response is ready. If the response code indicates an error
 * the callback is invoked with an error object in the first parameter. Otherwise it is undefined
 * and the response is located in the second parameter.
 * 
 * @param {string} - url
 * @param {RequestCallback} cb - callback
 */
export function sendGetHttpRequest(url, cb) {
    var req = new XMLHttpRequest();
    const is2xxStatus = (status) => Math.floor(status / 100) === 2;

    req.onreadystatechange = function() {
        if(this.readyState === 4) {
            if(is2xxStatus(this.status)) {
                return cb(undefined, this);
            }
            return cb(new Error("The response code didn't indicate a success"));
        }
    }
    req.open("GET", url, true);
    req.send();
}

// #reqion typedef

/** 
 * @callback RequestCallback
 * @param {Error | undefined} err - A error if any
 * @param {XMLHttpRequest | undefined} obj - The response object on success
 */

// #endregion