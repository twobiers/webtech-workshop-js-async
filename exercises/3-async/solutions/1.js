import fetch from "node-fetch";

 /**
  * @returns {Promise<any>}
  */
async function fetch404() {
    const response = await fetch("https://httpbin.org/status/404");
    if(!response.ok) {
        throw new Error(response);
    }
    return response.body;
}
 
async function callHttpBin() {
    try {
        await fetch404();
    } 
    catch(err) {
        console.log(`Received an errornous response from ${err.url}`);
        const res = await fetch("https://httpbin.org/status/200");
        console.log(`Received Status ${res.status} from ${res.url}`);
    }
}

callHttpBin();