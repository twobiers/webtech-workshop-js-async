/**
 * 1 - 
 *      In this exercise we're going to perform an AJAX request using the
 *      {@link https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API Fetch API}
 *      and process the response.
 *      We will use {@link https://httpbin.org/} as the server.
 * 
 *      Your task is:
 *          - Write a function that sends a GET request to {@link https://httpbin.org/status/404}
 *          - If that request responses with a error code, fallback to {@link https://httpbin.org/status/200}
 *          - When the request is successful, log something (like the response status) and send a request to 
 *            {@link https://httpbin.org/json} and log the response (parsed as json)
 */

function callHttpBin() {

}

/**
 * 2 -
 *      If you haven't already done it, we're taking the same exercise as in one But will
 *      translate a errornous response into a promise rejection, for this we're going to
 *      use a small utility function and do the exercise again.
 */
/**
 * @param {string} url 
 * @returns {Promise<any>}
 */
function fetchWithRejectOnError(url) {
    
}

function callHttpBin() {

}