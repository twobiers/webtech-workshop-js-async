/**
 * In this exercise we're going to perform an AJAX request using the
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpReques XMLHttpRequest API}
 * and process the response.
 * We will use {@link https://httpbin.org/} as the server.
 * 
 * Your task is:
 *  - Write a function that sends a GET request to {@link https://httpbin.org/status/404}
 *  - If that request does not responsd with a 2xx status code, fallback to {@link https://httpbin.org/status/200}
 *  - When one of the requests is successful, log request url and response status and send a request to 
 *    {@link https://httpbin.org/json} and log the response
 */

// Here is a generic example how to use the XMLHttpRequest, you can use
// #reqion typedef
/** 
 * @callback RequestCallback
 * @param {XMLHttpRequest} obj - The response object
 */
// #endregion

/**
 * @param {string} - url
 * @param {RequestCallback} cb - callback
 */
function sendGetHttpRequest(url, cb) {
    var req = new XMLHttpRequest();
    req.onreadystatechange = function () {
        if(this.readyState === 4) {
             cb(this);
        }
    }
    req.open("GET", url, true);
    req.send();
}

// Most likely you will end up with something like this
function callHttpBin() {
    const is2xxStatus = (status) => Math.floor(status / 100) === 2;
    sendGetHttpRequest("https://httpbin.org/status/404", (obj) => {
        if (is2xxStatus(obj.status)) {
            sendGetHttpRequest("https://httpbin.org/status/200", (obj) => {
                if (!is2xxStatus(obj.status)) {
                    throw new Error("abc");
                }
                console.log(`${obj.responseURL}: ${obj.status}`);
                
                sendGetHttpRequest("https://httpbin.org/json", (obj) => {
                    console.log(obj.response);
                });
            });
            return;
        }
        sendGetHttpRequest("https://httpbin.org/json", (obj) => {
            console.log(obj.response);
        });
        console.log(`${obj.responseURL}: ${obj.status}`);
    });
}

// Or this - which is essential the same
function is2xxStatus(status) {
    return Math.floor(status / 100) === 2;
}

function callHttBin404(cb) {
    sendGetHttpRequest("https://httpbin.org/status/404", (obj) => {
        console.log(`${obj.responseURL}: ${obj.status}`);
        cb(obj);
    });
}

function callHttBin200(cb) {
    sendGetHttpRequest("https://httpbin.org/status/200", (obj) => {
        console.log(`${obj.responseURL}: ${obj.status}`);
        cb(obj);
    });
}

function callHttBinJson() {
    sendGetHttpRequest("https://httpbin.org/json", (obj) => {
        console.log(obj.response);
    });
}

function callHttpBin() {
    callHttBin404(obj => {
        if(!is2xxStatus(obj)) {
            callHttBin200(() => {
                callHttBinJson();
            })
        } else {
            callHttBinJson();
        }
    })
}
