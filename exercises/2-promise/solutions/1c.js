import { sendGetHttpRequest } from "../../util/xhr.js";

function promisifyGetHttpRequest(url) {
    return new Promise((resolve, reject) => {
        sendGetHttpRequest(url, (err, obj) => {
            if (err || !!obj) {
                return reject(err);
            }
            return resolve(obj.response);
        });
    });
}

promisifyGetHttpRequest("https://httpbin.org/json")
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.error(err);
    });