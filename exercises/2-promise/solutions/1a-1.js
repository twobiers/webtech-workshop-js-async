// Zählt bis 20
const promiseBadLuck = new Promise((resolve, reject) => {
    for(let i = 1; i <= 20; i++) {
        if(i === 13) {
            reject(new Error("Bad luck"));
        }
        console.log(i);
    } 
    resolve();
});

promiseBadLuck
    .finally(() => {
        console.log("Resolved");
    });