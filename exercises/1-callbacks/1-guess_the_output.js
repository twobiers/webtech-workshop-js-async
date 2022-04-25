// Function definitions
function printHello() {
    console.log("Hello");
}

function printWorld() {
    console.log("World");
}

//#region 1

setTimeout(printWorld, 100);
printHello();

//#endregion

//#region 2

setTimeout(printHello, 0);
printWorld();

//#endregion

//#region 3

setTimeout(printHello, 0);
setTimeout(printWorld, 0);

//#endregion