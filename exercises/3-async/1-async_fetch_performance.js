async function fetchResults() {
    const logResult = (name, result) => {
        console.log(`Successfully fetched Result ${name}`);
        console.log(result);
    };

    const resultA = await fetch("https://httpbin.org/delay/2");
    logResult("A", resultA);

    const resultB = await fetch("https://httpbin.org/delay/1");
    logResult("B", resultB);

    const resultC = await fetch("https://httpbin.org/delay/3");
    logResult("C", resultC);
}

const startDate = Date.now();

fetchResults()
    .then(() => {
        const endDate = Date.now();
        console.log(`Execution completed after ${endDate - startDate}ms`);
    });