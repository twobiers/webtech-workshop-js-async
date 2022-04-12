# Nebenläufigkeit in JavaScript

## JavaScript - Fast Facts

- 1995 in 10 Tagen entwickelt
- Von Netbeans für Netbeans Navigator
- Seit 1997 standartisiert
  - ECMA-262
  - ISO/IEC 16262
- ECMAScript = JavaScript
  - ECMAScript häufiger im Kontext für Standard und Sprache verwendet
  - JavaScript eher für konkrete Implementierung
- Abkürzung ECMAScript - ES
- Versionen: ES1, ES2, ES3, ES4, ES5, ES5.1 ES6, ES2016-2021
- TC39 verantwortliches Komittee
  - Adobe, Facebook, Google, Mozilla, Twitter, ...
  - Tagung in 2-Monats-Takt
- Entwicklung nach Grundsatz "Don't break the web"
  - Rückwärtskompatibel
  - Explizites Opt-In

## JavaScript - Nebenläufigkeit

### Warum ist das Thema relevant

- W3Techs vermeldet 97,9% der Programmiersprachen für Websites sind JavaScript ([Quelle](https://w3techs.com/technologies/overview/client_side_language)).
- Statisch gerenderte Webseiten ohne JavaScript sind eine Seltenheit geworden.
- Wenn wir mit JavaScript im Browser arbeiten ist alltägliche Aufgabe die Komposition zwischen Nutzereingaben, Laden von Ressourcen, Rendern / Updates, ...
  - Im Kern: Alles das was "spannend" ist, passiert asynchon bzw. nebenläufig

### Definitionen

- Nebenläufig

> Concurrency is the composition of independently executing computations.
> Concurrency is a way to structure software [...].
> It is not parallelism.
> [...] although it enables parallelism.
> If you have only one processor, your program can still be concurrent but it cannot be parallel.
> [...] a well-written concurrent program might run efficiently in parallel on a multiprocessor.

aus: [Go Concurrency Patterns](https://talks.golang.org/2012/concurrency.slide#6)

- Synchron vs Asynchron

Synchron: Aufruf und Antwort erfolgen direkt nacheinander. Auf die Antwort wird gewartet

Asynchron: Aufruf und Antwort können Zeitversetzt erfolgen. Auf einen Aufruf folgt nicht direkt eine (finale) Antwort. Während auf die Antwort gewartet wird, 
können weitere Aufgaben übernommen werden.

Warum asynchron relevant? Wenn wir externe Resourcen von einer API anfragen, möchten wir die Zeit nicht mit warten verbringen, sondern stattdessen schonmal weitere Dinge machen.

### Basics

- **JavaScript ist sequentiell**
- **JavaScript hat nur einen Ausführungskontext**
- **JavaScript läuft in einem Prozess** (JavaScript Runtime like V8, Spidermonkey, Chakra)

> An execution context is [...] used to track the runtime evaluation of code [...]. At any point in time, there is **at most one execution context** [...] that is actually executing code.

[ECMA-262, 12th edition, June 2021 ECMAScript® 2021 Language Specification](https://262.ecma-international.org/12.0/#sec-execution-contexts)

- Häufig hört man deshalb, dass JavaScript Single-Threaded ist
- Teil des Execution Context ist typischerweise Call Stack
- Neben Stack gibt es auch noch den Heap
  - Auf Heap befinden sich die Objekte

Beispiel-Code

```js
// Funktionsdeklarationen betreffen den Stack nicht
function printHelloWorld() {
  printHello(); // Stack: <printHelloWorld, printHello>
  // Stack: <printHelloWorld>
  printWorld(); // Stack: <printHelloWorld, printWorld>
}
function printHello() {
  console.log("Hello"); // Stack: <printHelloWorld, printHello, console.log>
}
function printWorld() {
  console.log("World"); // Stack: <printHelloWorld, printWorld, console.log>
}

// Stack: <>
printHelloWorld(); // Stack: <printHelloWorld>
// Stack: <>
```

- Klassisches Beispiel Stack Trace:

```js
function errornousFunction() {
  throw new Error("Oh no!");
}

function deepFunction() {
  errornousFunction();
}

function callMe() {
  deepFunction();
}

callMe();
```

Output

```
Uncaught Error: Oh no!
    at errornousFunction (REPL3:2:11)
    at deepFunction (REPL7:2:5)
    at callMe (REPL11:2:5)
```

### Web APIs

- Browser stellen unterschiedliche APIs bereit, die von JavaScript aus aufgerufen werden können. [MDN Liste](https://developer.mozilla.org/en-US/docs/Web/API).
  - Beispiel `console.log` [Console API](https://console.spec.whatwg.org/#console-namespace)
- Node.js bietet auch weitere APIs (z.B. `fs` [API](https://nodejs.org/api/fs.html))

### Event Loop und Task Queue

- Web APIs können synchron oder asynchron sein
  - Antworten werden als Task auf einer Task Queue scheduled
- Task Queue
  - Ist im Detail gar keine Queue, sondern ein Set 
    - Der erste ausführbare Task wird gepickt, nicht per-se der zuerst eingefügte
  - Jeder Task kommt von einer bestimmten Quelle (Task source)
    - Parsing, Callbacks, DOM manipulation, Events, ...
- Event Loop ist Bindeglied zwischen der JavaScript Engine und der Web API
  - Der Event Loop prüft permanent ob Tasks vorhanden sind.
  - Wenn ein Task vorhanden ist, wird dieser vom Event Loop auf den Call Stack geschoben (ausgeführt)
    - "Run-to-completion"
    - Jeder Task läuft garantiert bis zum Ende ehe ein neuer Task begonnen wird.
  - Zwischen Tasks wird gerendert
- Event Loop ist nicht Teil von ECMAScript, sondern des HTML Standards bzw. Node.js
  - [HTML Standard | Event Loop](https://html.spec.whatwg.org/multipage/webappapis.html#event-loops)
  - [Node.js | Event Loop](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/)
  - Wir werden uns auf den HTML Teil beschränken.
  - Der Event Loop beschreibt also das Prozessmodell eines Browsers, nicht das von JavaScript
  - ECMAScript definiert [Jobs und Job Queues](https://tc39.es/ecma262/#sec-jobs-and-job-queues)
- Everything runs in parallel - **except your code**
    - **NEVER BLOCK THE EVENT LOOP**

![Event Loop Animation](https://media.giphy.com/media/RhBsyPkh1BC87DSIJe/giphy.gif)

Darstellung: Nadiv Gold Edelstein, The Event Loop Explained [https://www.section.io/engineering-education/event-loop-explained/](https://www.section.io/engineering-education/event-loop-explained/)

Beispiel folgeder code erstellt einen neuen Task, der hello World ausgibt und nach 100ms auf die Task Queue gesetzt wird:

```js
setTimeout(() => console.log("Hello, World"), 100);
```

Jeder Task wird garantiert bis zum ende ausgeführt. Das bedeutet, folgender Code:

```js
console.log("Hello");
setTimeout(() => console.log("!"), 0);
console.log("World");
```

liefert **immer** den gleichen Output:

```
Hello
World
!
```

### Arten von Asynchronen Antworten

- Patterns
    - Events
    - Callbacks
    - Promises

# Callbacks

- Funktionen, die als Task registriert werden.
```js
setTimeout(() => console.log("Hello, World"), 100);
```
```js
function printHelloWorld() {
    console.log("Hello, World");
}

setTimeout(printHelloWorld, 100);
```
```js
element.addEventListener('click', () => console.log("Hello, World!"));
```

## Pitfalls

- Abhängigkeiten zwischen Callbacks können in eine Strutkur namens **"Callback Hell"** ausarten
    - Schwierig warten
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
- Nicht blockieren! Callbacks werden auch "normal" ausgeführt und können die Ausführung blockieren
```js
setTimeout(() => {
    for(let i = 0; i < 1e15, ++i) {}
}, 100);
```

## Good Practices

- Callback-Ketten flach halten
    - KISS and DRY
```js
function printExclamationMark() {
    console.log("!");
}
function printJavaScript() {
    console.log("JavaScript");
    setTimeout(prinprintExclamationMark, 100);
}
function printFrom() {
    console.log("From");
    setTimeout(printJavaScript, 100);
}
function printHello() {
    console.log("World");
    setTimeout(printFrom, 100);
}
function printHelloFromJavaScriptDelayed() {
    console.log("Hello");
    setTimeout(printHello, 100);
}

printHelloFromJavaScriptDelayed();
```
- Wenn ein Callback entwickelt wird, dann mit 2 Parametern (Success / Error) arbeiten
    - Node.js fährt Error-First Callback Style
```js
function scheduleTaskForDate(date, callback) {
    const now = Date.now();
    if (date < now) {
        callback(new Error("Cannot schedule task for a date that is in the past"));
    }

    setTimeout(() => callback(undefined, Date.now()), now - date);
}
```
- Fehler abfangen und nicht ignorieren!
```js
scheduleTaskForDate(Date.now() - 100, (err, date) => {
    if(err) {
        console.error(err);
        return;
    }
    console.log("It is time");
});
```

# Promises

- In modernen APIs sind Callbacks nicht mehr so verbreitet
  - FÜr asynchrone APIs werden i.d.R. Promises eingesetzt
    - ES6 Feature
    - Promises fallen konzeptuell unter "Futures" und sind auch in anderen Sprachen verbreitet
      - Asynchroner Arbeitsablauf, der "irgendwann" abgeschlossen wird
  - Event Handler sind dem Idiom nach weiterhin Callbacks
    - Modernere Ansätze wie bspw. reaktive Programmierung mit [RxJS](https://rxjs.dev/)
- Erweiterung des vorangegangen Event Loop Models
  - Neben der Task Queue, gibt es auch noch eine weitere Queue, die **microtask queue**
  - Microtask Queue wird unter den gleichen Bedingungen wie die Task Queue ausgeführt (Stack leer)
    - Microtask Queue wird vor der Task Queue abgearbeitet (Microtasks werden priorisiert)
    - Mit dem Unterschied, dass die Microtask Queue komplett abgearbeitet ist, bis sie leer ist.
    - Neu hinzugekommene Microtasks werden mit abgearbeitet

- Promises haben eine einfache Syntax und sind "cleaner"
- Erlauben Shallow Code / Flache Codestruktur
- Sowhol Asynchrone als auch synchrone Fehler können einfacher behandelt werden
- Erlauben über async/await Pattern eine sequentielle Struktur (Siehe Async / Await Pattern)

## Pitfalls

- Never settling promise anders als in `.then()` Blöcken, werden Promises über den Konstruktor nicht automatisch umgewandelt
```js
new Promise(() => {})
```
```js
new Promise(() => {
  return 1;
});
```
```js
new Promise((resolve, reject) => {
  if(true === false) {
    throw new Error();
    reject(new Error());
  }
  return true;
});
```
- Keine Exceptions mit Promises mischen
```js
function funcThatThrows() {
  throw new Error();
}
function funcThatReturnsAPromise() {
  funcThatThrows();
  return Promise.resolve(42);
}

// Funktionsaufruf wirft Exception
funcThatReturnsAPromise()
  .catch(err => console.error(err)); // Catch greift nicht
```
Wenn synchroner Code zum Einsatz kommt, der eine Exception werfen kann, dann Fehler abfangen und in Promise Rejection wrappen.
```js
function funcThatThrows() {
  throw new Error();
}
function funcThatReturnsAPromise() {
  try {
    funcThatThrows();
    return Promise.resolve(42);
  } catch(err) {
    return Promise.reject(err);
  }
}

funcThatReturnsAPromise()
  .catch(err => console.error(err)); // Catch greift
```
Oder aber in `.then()` Block aufrufen, weil hier die Exception automatisch in eine rejection wrapped wird.
```js
function funcThatThrows() {
  throw new Error();
}
function funcThatReturnsAPromise() {
  return Promise.resolve()
    .then(() => {
      funcThatThrows(); // Exceptions werden automatisch in Rejections konvertiert
      return 42; // Returns werden automatisch in Fulfillments konvertiert
    });
}

funcThatReturnsAPromise()
  .catch(err => console.error(err)); // Catch greift
```
Oder Konstruktor verwenden, der konvertiert die Exception auch automatisch in eine Rejection
```js
function funcThatThrows() {
  throw new Error();
}
function funcThatReturnsAPromise() {
  return new Promise((resolve, reject) => {
    funcThatThrows(); // Exceptions werden automatisch in Rejections konvertiert
    return resolve(42); // Achtung! Hier muss resolve() aufgerufen werden
  });
}

funcThatReturnsAPromise()
  .catch(err => console.error(err)); // Catch greift
```

## Good Practices

- Kombinatoren verwenden / Promises nahe beiander halten um Perfomance zu maximieren
```js
const promiseA = () => Promise.resolve("a");
const promiseB = () => Promise.resolve("b");

promiseA()
  .then(res => {
    console.log(res);
    // promiseB() wird erst dann berechnet, wenn promiseA fulfilled ist
    return promiseB();
  })
  .then(res => {
    console.log(res);
  });

// promiseA() und promiseB() starten nebenläufig zueinander
Promise.all([promiseA(), promiseB()])
  .then(res => {
    console.log(res[0]);
    console.log(res[1]);
  });

// Man kann auch den promises nahe zueinander halten, dadurch starten 
// sie nahezu nebnläufig und man hat den gleichen Effekt.
const pA = promiseA();
const pB = promiseB();

pA.then(res => {
  console.log(res);
  return pB;
})
.then(res => {
  console.log(res);
})
```
- Shallow Chaning
```js
const promiseA = () => Promise.resolve("a");
const promiseB = (a) => Promise.resolve(`B: ${a}`);

// So kommen wir wieder zu der Callback Hell. 
promiseA()
  .then(res => {
    console.log(res);
    return promiseB()
      .then(res2 => {
        console.log(res);
      });
  });

// So bleibt der code flach
promiseA()
  .then(res => {
    console.log(res);
    return promiseB();
  })
  .then(res => {
    console.log(res);
  });
```

# Async / Await Pattern

- ES7 führt async/await Syntax ein
  - Syntactic Sugar für den Umgang mit Promises
  - Erlaubt es asynchronen code zu schreiben, der so aussieht wie synchroner code
  - Pattern auch in vielen anderen Sprachen zu finden: Kotlin, C#, Rust, ...
- Asynchrone Funktionen werden mit `async` gekennzeichnet und returnen __immer__ eine Promise
  - Wie in `.then()` wird eine Exception geworfen, dann wird daraus automatisch eine Rejection, returns ein Fulfillment
  - Innerhalb der Funktion schreiben wir code als wäre er synchron
  - `await` kommt dann zum Einsatz, wenn eine Promise benötigt wird

## Pitfalls

- Asynchrone Funktionen sind das gleiche wie async Funktionen
  - Asynchrone Funktionen sind immer Asynchron und können Promise-Based oder Callback-Based sein.
  - Async Funktionen sind immer Asynchron und immer Promise-Based.
- Genauso wie der Promise-Konstruktor wird eine async Funktion synchron ausgeführt
  - `return`, `throw` und `await` unterbrechen Ausführung und 

TODO:
- https://mikebifulco.com/posts/eslint-no-floating-promises
- https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-misused-promises.md

## Good Practices

- `await` pausiert die Ausführung, daher sollte `await` an den Stellen eingesetzt werden, an denen 
  das Ergebnis benötigt wird, und nicht bereits vorher. Wenn das Ergebnis nicht benötigt wird, ist
  `await` obsolet.
  - Promise-Kombinatoren helfen auch hier für verbesstere Nebenläufigkeit
  - Die Promises "nahe beinander" zu halten funktioniert auch hier - aber nicht mit `await`

- Async / Await sparsam einsetzen


# Weiterführende Themen

- Asynchrone Iteratoren
- Asynchrone Generatoren

# Resourcen

- [JavaScript Visualizer 9000](https://www.jsv9000.app/)
- [What the heck is the event loop anyway? | Philip Roberts | JSConf EU](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
- [Jake Archibald: In The Loop - JSConf.Asia](https://www.youtube.com/watch?v=cCOL7MC4Pl0)