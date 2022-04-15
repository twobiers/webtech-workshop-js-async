/**
 * Given is a function that calls a {@link https://httpbin.org/404 HttpBin} endpoint
 * and responses with 404. The response will result into a promise rejection as it will
 * be unsuccessful. 
 * Your task is to catch the error and fallback to {@link https://httpbin.org/200} in an 
 * async function.
 */

import fetch from "node-fetch";

/**
 * @returns {Promise<any>}
 */
async function fetch404() {
    const response = await fetch("https://httpbin.org/status/404");
    if(!response.ok) {
        throw new Error(response);
    }
    return response.body;
}

async function callHttpBin() {
    // Your solution
}

// Test
callHttpBin();