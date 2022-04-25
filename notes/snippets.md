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