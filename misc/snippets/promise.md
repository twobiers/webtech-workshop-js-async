# Basic Promise Usage

## Creating Promises

Using the Constructor
```js
new Promise((resolve, reject) => {
  if(somethingWentWrong) {
    reject(new Error());
  }
  resolve(value);
});
```

Using static methods
```js
Promise.resolve(value);
Promise.reject(new Error());
```

A promise is "flattend". This means that a promise handed to `Promise.resolve` will become the returned promise.
```js
const a = Promise.resolve(
    Promise.resolve(value) // a will resolve into exactly this promise
);
```

## Promise-Chaining
Each chaining method `.then()`, `catch()` and `.finally()` will resolve into a promise. The result is flattend the same way `Promise.resolve` is.
```js
Promise.resolve(value)
    .then(v => v * v) // Create a new promise from result
    .then(v => {
        if (v == 0) {
            throw new Error("Cannot divide by 0"); // Resolves into promise rejection
        }
        return v / 0;
    })
   .then(v => {
	  return Promise.resolve(v - 1); // Will resolve into exactly this promise
   })
    .catch(err => console.error(err)) // Catch a rejected promises. Errors will be propagated
    .finally(() => {
        connection.close(); // If promise has been settled
    });
```

## Promisify Callbacks
Promisify [setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout)
```js
function promisedTimeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}

promisedTimeout(100)
    .then(() => console.log("Hey"));
```

Promisification is not really useful for event listeners as a promise will be cached and resolves only on the first fired event.
```js
new Promise((resolve, reject) => {
    document.addEventListener("click", resolve);
})
.then(event => console.log(event));

document.click(); // Logs event
document.click(); // Doesn't log event
```

# ❌ Don'ts

The promise constructor is executed synchronously and can result into never-settling or never-fulfilling promises if the callback methods `resolve()` and/or `reject()` are not used.
```js
// Never Settling
new Promise(() => {});
new Promise(() => {
  return 1;
});

// Never Fulfilled
new Promise((resolve, reject) => {
  if(someCondition) {
    reject(new Error()); // Rejection 
  }
  return true; // Not used in `resolve()`
});
new Promise((resolve, reject) => {
  if(someCondition) {
   throw new Error(); // Constructor is executed synchronously, therefore no rejection can be infered from a thrown exception
  }
  return true;
});
```

Mixing Exceptions with Promises:
```js
function funcThatThrows() {
  throw new Error();
}
function funcThatReturnsAPromise() {
  funcThatThrows();
  return Promise.resolve(42);
}

// This function call throws
funcThatReturnsAPromise()
  .catch(err => console.error(err)); // And the catch cant handle it
```

Nested Chaining (Refer to the Callback Hell):
```js
const promiseA = () => Promise.resolve("a");
const promiseB = (a) => Promise.resolve(`B: ${a}`);

promiseA()
  .then(res => {
      return promiseB(res)
        .then(res2 => {
          console.log(res);
      });
  });
```

# ✅ Do's

Use [Promise combinators](https://v8.dev/features/promise-combinators).
```js
const promiseA = () => Promise.resolve("a");
const promiseB = () => Promise.resolve("b");

Promise.all([promiseA(), promiseB()]);
Promise.any([promiseA(), promiseB()]);
Promise.allSettled([promiseA(), promiseB()]);
Promise.race([promiseA(), promiseB()]);
```

Shallow Chaining:
```js
const promiseA = () => Promise.resolve("a");
const promiseB = (a) => Promise.resolve(`B: ${a}`);

promiseA()
  .then(res => {
    return promiseB(res);
  })
  .then(res => {
    console.log(res);
  });
```