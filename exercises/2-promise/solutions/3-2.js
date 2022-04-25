// Gegeben ist folgender Code. Aufgabe ist es den 
// Fehler in dem Promise.catch() abzufangen.
// Es gibt insgesamt 3 Möglichkeiten.

// Diese Funktion darf nicht abgeändert werden.
const funcThatThrows = () => {
    throw new Error("Whops")
};

function funcThatReturnsAPromise() {
    return new Promise((resolve, reject) => {
        funcThatThrows();
        return resolve(42);
    });
}

// Funktionsaufruf wirft Exception
funcThatReturnsAPromise()
    .catch(err => console.error(err)); // Catch greift nicht