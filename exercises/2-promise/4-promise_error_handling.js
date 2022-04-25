// Gegeben ist folgender Code. Aufgabe ist es den 
// Fehler in dem Promise.catch() abzufangen.
// Es gibt insgesamt 3 Möglichkeiten.

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