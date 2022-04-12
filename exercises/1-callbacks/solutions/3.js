import { sendGetHttpRequest } from "../../util/xhr.js";

// Most likely you will end up with something like this
function callHttpBin() {
    sendGetHttpRequest("https://httpbin.org/status/404", (err, obj) => {
        if (err) {
            sendGetHttpRequest("https://httpbin.org/status/200", (err, obj) => {
                if (err) {
                    throw err;
                }
                console.log(`${obj.responseURL}: ${obj.status}`);
                
                sendGetHttpRequest("https://httpbin.org/json", (err, obj) => {
                    console.log(obj.response);
                });
            });
            return;
        }
        sendGetHttpRequest("https://httpbin.org/json", (err, obj) => {
            console.log(obj.response);
        });
        console.log(`${obj.responseURL}: ${obj.status}`);
    });
}

callHttpBin();

// TODO: Add a shallow solution


// #reqion typedef
/** 
 * @callback RequestCallback
 * @param {XMLHttpRequest} obj - The response object
 */
// #endregion