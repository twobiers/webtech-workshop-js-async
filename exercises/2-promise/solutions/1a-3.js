// Zählt bis 13
const promiseBadLuck = Promise.resolve()
    .then(() => {
        for(let i = 1; i <= 20; i++) {
            if(i === 13) {
                throw new Error("Bad luck");
            }
            console.log(i);
        } 
    });

promiseBadLuck
    .finally(() => {
        console.log("Resolved");
    });