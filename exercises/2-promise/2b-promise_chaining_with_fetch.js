import fetch from "node-fetch";

/**
 * If you haven't already done it, we're taking the same exercise as in 2a But will
 * translate a unsuccessful status code response into a promise rejection, for this we're going to
 * use a small utility function and do the exercise again.
 * Remember: Your task is:
 *     - Write a function that sends a GET request to {@link https://httpbin.org/status/404}
 *     - If that request responses with a error code, fallback to {@link https://httpbin.org/status/200}
 *     - When the request is successful, log something (like the response status) and send a request to 
 *       {@link https://httpbin.org/json} and log the response (parsed as json)
 *     - When the request is unsuccessful 
 */
/**
 * @param {string} url 
 * @returns {Promise<any>}
 */
function fetchWithRejectOnError(url) {
    
}

function callHttpBin() {

}