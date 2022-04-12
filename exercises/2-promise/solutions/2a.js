function callHttpBin() {
    fetch("https://httpbin.org/status/404")
        .then(res => {
            if(!res.ok) {
                return fetch("https://httpbin.org/status/200");
            }
            return res;
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