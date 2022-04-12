```js
const remoteResource = fetch("https://httpbin.org/json")
    .then(result => {
        console.log("Fetched result");
        return result;
    });
const promiseA = remoteResource
    .then(result => {
        console.log("Result is in Promise A");
    });
const promiseB = remoteResource
    .then(result => {
        console.log("Result is in Promise B");
    });
```
```js
const promiseA = () => Promise.resolve("a");
const promiseB = () => Promise.resolve("b");

// Alle resolved
Promise.all([promiseA(), promiseB()]);
// Eine resolved
Promise.any([promiseA(), promiseB()]);
// Alle settled
Promise.allSettled([promiseA(), promiseB()]);
// Das erste Settling
Promise.race([promiseA(), promiseB()]);
```
```js
new Promise((resolve, reject) => {
    document.addEventListener("click", resolve);
})
.then(event => console.log(event));
```
```js
const promiseA = () => fetch("//foo");
const promiseB = () => fetch("//bar");

async function printResults() {
    // Ausführung wird unterbrochen und auf promiseA gewartet
    const resultA = await promiseA();
    const resultB = await promiseB();

    // Besser: Ausführung beginnt nebenläufig
    const [resultA, resultB] = await Promise.all([
        promiseA(),
        promiseB()
    ]);
}
```
```js
async function getSomething() {
    return await fetch("//foo");
}

async function printSomething() {
    const something = await getSomething();
    console.log(something);
}

async function getSomething() {
    return fetch("//foo");
}

async function printSomething() {
    const something = await getSomething();
    console.log(something);
}
```

```js

```