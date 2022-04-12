import fetch from "node-fetch";

async function fetchResults() {
    const logResult = (name) => {
        console.log(`Successfully fetched Result ${name}`);
    };

    // Question for the workshop participants: Why is a function faster?
    const resultA = () => fetch("https://httpbin.org/delay/2")
        .then(res => logResult("A"));

    const resultB = () => fetch("https://httpbin.org/delay/1")
        .then(res => logResult("B"));

    const resultC = () => fetch("https://httpbin.org/delay/3")
        .then(res => logResult("C"));

    return Promise.all([resultA(), resultB(), resultC()]);
}

const startDate = Date.now();

fetchResults()
    .then(() => {
        const endDate = Date.now();
        console.log(`Execution completed after ${endDate - startDate}ms`);
    });