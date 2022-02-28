const http = require("http");
const server = http.createServer((req, res) =>{
    if(req.url === '/'){
        res.write("Hello world")
        res.end();
    }
    if(req.url === "/api/courses"){
        res.write(JSON.stringify([1,2,3])) // return array of an obj using JSON
        res.end();
    }
}); // this server is an eventEmitter, this have all the 
// capability of eventEmitter.


// server.on("connection", (socket) =>{
//     console.log("new connection...")
// }) // listen the event.

// this is like raise an event on 3000 port
server.listen(3000); // listen on port
console.log("listen on port no 3000...")


