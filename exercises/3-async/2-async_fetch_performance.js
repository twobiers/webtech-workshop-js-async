/**
 * Given is the following code. It requests three endpoints from 
 * {@link https://httpbin.org/} using the {@link https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API Fetch API}.
 * After each sucessful response a message will be logged.
 * 
 * However, the 3 requests do need more than 6000ms in total. Can you speed it up a bit?
 */

import fetch from "node-fetch";

async function fetchResults() {
    const logResult = (name) => {
        console.log(`Successfully fetched Result ${name}`);
    };

    const resultA = await fetch("https://httpbin.org/delay/2")
    logResult("A");

    const resultB = await fetch("https://httpbin.org/delay/1");
    logResult("B");

    const resultC = await fetch("https://httpbin.org/delay/3");
    logResult("C");
}

const startDate = Date.now();

fetchResults()
    .then(() => {
        const endDate = Date.now();
        console.log(`Execution completed after ${endDate - startDate}ms`);
    });