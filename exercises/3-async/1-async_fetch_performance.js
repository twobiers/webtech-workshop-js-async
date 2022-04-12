import fetch from "node-fetch";

async function fetchResults() {
    const logResult = (name) => {
        console.log(`Successfully fetched Result ${name}`);
    };

    const resultA = await fetch("https://httpbin.org/delay/2");
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