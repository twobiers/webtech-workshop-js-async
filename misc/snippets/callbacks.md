# Basic Callback Usage
Arrow Function in [setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout)
```js
setTimeout(() => console.log("Hello, World"), 100);
```

Named Function in [setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout)
```js
function printHelloWorld() {
    console.log("Hello, World");
}
setTimeout(printHelloWorld, 100);
```

[EventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) on [EventTarget](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget)
```js
element.addEventListener('click', () => console.log("Hello, World!"));
```

# ❌ Don'ts
Blocking in Callback (here simulated using a long-running function):
```js
setTimeout(() => {
    for(let i = 0; i < 1e15, ++i) {}
}, 100);
```
Callback-Hell:
```js
setTimeout(() => {
    console.log("Hello");
    setTimeout(() => {
        console.log("World");
        setTimeout(() => {
            console.log("From");
            setTimeout(() => {
                console.log("JavaScript");
                setTimeout(() => {
                    console.log("!");
                }, 100);
            }, 100);
        }, 100);
    }, 100);
}, 100);
```

# ✅ Do's
Shallow Code:
```js
function callC() {
    console.log("C");
}
function callB() {
    console.log("B");
    setTimeout(callC, 100);
}
function callA() {
    console.log("A");
    setTimeout(callB, 100);
}

setTimeout(callA, 0);
```

[Error-First Callback-Style](https://nodejs.org/api/errors.html#error-first-callbacks)
```js
function scheduleTask(date, callback) {
    const now = Date.now();
    if (date < now) {
        callback(new Error());
    }
    setTimeout(() => {
		callback(undefined, Date.now())
	}, now - date);
}
```
Always handle errors
```js
scheduleTask(Date.now() - 100, (err, date) => {
    if(err) {
        return console.error(err);
    }
    return console.log("It is time");
});
```