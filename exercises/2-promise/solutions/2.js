import fetch from "node-fetch";

function fetchWithRejectOnError(url) {
    return fetch(url)
        .then(res => {
            if(res.ok)
                return res;
            throw new Error("Response was not successful");
        });
}

function callHttpBin() {
    fetchWithRejectOnError("https://httpbin.org/status/404")
        .catch(err => {
            return fetch("https://httpbin.org/status/200");
        })
        .then(res => {
            console.log(`${res.url}: ${res.status}`);
            if(res.ok) {
                return fetch("https://httpbin.org/json");
            }
            throw new Error("Unexpected errornous response");
        })
        .then(res => res.json())
        .then(res => console.log(res));
}

callHttpBin();