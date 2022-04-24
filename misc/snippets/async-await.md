# Usage of Async/Await

Async/Await is just [syntactic sugar](https://en.wikipedia.org/wiki/Syntactic_sugar) for promises. A function marked as `async` will always return a promise. The following two code parts are semantically identical ([Source of example](https://gist.github.com/joeytwiddle/ff0a9cf92be0366b274e4283a8b5a935)):
```js
async function getFoo (bar) {
  const baz = 2 * bar;
  
  const root = await asyncSqrt(baz);
  
  return 2 * root;
}

// is the same as:
function getFoo (bar) {
  return new Promise((resolve, reject) => {
    const baz = 2 * bar;

    return asyncSqrt(baz); 
  })
  .then(root => {
    return 2 * root;
  });
}
```

# ❌ Don'ts

A `async` function will be executed synchronously until it reaches a `await`, `throw` or `return` statement.
```js
async function testSynchronousCalls() {
  console.log("Executed in sync");
  return Promise.resolve("Executed async");
}

console.log("Started in sync");

testSynchronousCalls()
  .then(res => console.log(res));
console.log("Ended in sync");
```

Otherwhise the Async-Await Pattern is fairly simple to use, just apply the [Do's](#✅-dos) and you will be good most of the cases.

# ✅ Do's

`await` will pause the execution context, therefore it is really useful to ise [Promise combinators](https://v8.dev/features/promise-combinators).

```js
const promiseA = () => fetch("//foo");
const promiseB = () => fetch("//bar");
async function printResults() {
    // Waiting for resultA, then for resultB
    const resultA = await promiseA();
    const resultB = await promiseB();

    // if resultB is not dependend on resultA, it is better to use combinators
    const [resultA, resultB] = await Promise.all([
        promiseA(),
        promiseB()
    ]);
}
```

use `await` where it is needed.
```js
async function printSomething() {
  // The console.log call depends on the result of something. Thereofre we await at this pont
  const something = await getSomething();
  console.log(something);
}
```

Don't overuse `async`
```js
// Remember that async function will always return a promise, so if we just need to propagate a promise anyway, 
// we don't have to make use of an async function and can return it directly
function getSomething() {
  return fetch("//foo");
}

async function printSomething() {
  const something = await getSomething();
  console.log(something);
}
```