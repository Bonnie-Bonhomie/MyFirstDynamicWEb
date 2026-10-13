
import http from "http";
import EventEmitter  from "events";

const customEmitter = new EventEmitter();

customEmitter.on("data", ()=>{
    console.log("This is the start stage of the emitter ");
    
})
customEmitter.emit("data", "AdeOlu", 23)

const server = http.createServer((req, res) =>
{
    console.log("You have refresh the browser");
    res.end("This is my response")
});

server.listen(4000,() => {
    console.log("Server running on port 4000...");
})



