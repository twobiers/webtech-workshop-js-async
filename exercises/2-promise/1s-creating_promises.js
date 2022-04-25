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

const promisedWorld = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("World");
    }, 1000);
});

function promisifyGetHttpRequest(url) {
    return new Promise((resolve, reject) => {
        sendGetHttpRequest(url, (obj) => {
            console.log(obj);
            if(is2xxStatus(obj.status)) {
                resolve(obj.response);
            } else {
                reject(new Error(`Errornous response status: ${obj.status}`));
            }
        });
    });
}