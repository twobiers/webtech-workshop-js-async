/**
 * In this exercise we're going to perform an AJAX request using the
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpReques XMLHttpRequest API}
 * and process the response. You can use the already imported helper-function "sendGetHttpRequest".
 * We will use {@link https://httpbin.org/} as the server.
 * 
 * Your task is:
 *  - Write a function that sends a GET request to {@link https://httpbin.org/status/404}
 *  - If that request responses with a error code (and it will), fallback to a GET request 
 *    to {@link https://httpbin.org/status/200}
 *  - When the request is successful, log something (like the response status)
 *  - After the successful request before, send a request to {@link https://httpbin.org/json} and log the response
 */

import { sendGetHttpRequest } from "../util/xhr.js";


function callHttpBin() {
    // Your solution here
}

// Test
callHttpBin();