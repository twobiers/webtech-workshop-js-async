import fetch from "node-fetch";

async function fetchResults() {
    const logResult = (name, result) => {
        console.log(`Successfully fetched Result ${name}`);
        console.log(result);
    };

    // Question for the workshop participants: Why is a function faster?
    const resultA = () => fetch("https://httpbin.org/delay/2")
        .then(res => logResult("A", res));

    const resultB = () => fetch("https://httpbin.org/delay/1")
        .then(res => logResult("B", res));

    const resultC = () => fetch("https://httpbin.org/delay/3")
        .then(res => logResult("C", res));

    return Promise.all([resultA(), resultB(), resultC()]);
}

const startDate = Date.now();

fetchResults()
    .then(() => {
        const endDate = Date.now();
        console.log(`Execution completed after ${endDate - startDate}ms`);
    });