// Zählt bis 13
const promiseBadLuck = new Promise((resolve, reject) => {
    for(let i = 1; i <= 20; i++) {
        if(i === 13) {
            return reject(new Error("Bad luck"));
        }
        console.log(i);
    } 
    resolve();
});

promiseBadLuck
    .finally(() => {
        console.log("Resolved");
    });