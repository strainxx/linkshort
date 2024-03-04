const http = require("http")
const db = require("./links.json")


const server = http.createServer()

server.on('request', (req, res) => {
    body = "Hey boi!"
    console.log("REQUEST")
    console.log(`Redirected ${req.socket.remoteAddress}!`)
    let resp = 200
    let loc = "https://www.aruus.uk/"
    if(db[req.url]) { resp = 308; loc = db[req.url] }
    console.log(req.url);
    res.writeHead(resp, {
        'Location': loc,
        'Content-Length': Buffer.byteLength(body),
        'Content-Type': 'text/plain',
    }).end(body)
})

server.listen("80", ()=>{
    console.log("Server started!")
})