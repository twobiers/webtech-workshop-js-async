/**
 * 3 - Promisify the sendGetHttpRequest function (see import). 
 *     The promise should resolve into the response.
 *     A non-2xx response status should be treated as an error.
 */

import { sendGetHttpRequest } from "../util/xhr.js";

/**
 * Returns a promisifed version of the sendGetHttpRequest function
 * @param {string} url 
 * @returns {Promise<XMLHttpRequest>}
 */
function promisifyGetHttpRequest(url) {
    // Your solution here
};

// Test
promisifyGetHttpRequest("https://httpbin.org/status/404")
    .then(() => {
        console.assert(true === false, "This case should not happen, as a 404 response should be rejected.");
    })
    .catch(() => {
        console.log("Request was correctly rejected");
        return promisifyGetHttpRequest("https://httpbin.org/status/200");
    })
    .then(() => {
        console.log("Request fulfilled sucessfuly");
    })
    .catch(() => {
        console.assert(true === false, "This case should not happen, as a 200 response should fulfill.");
    });