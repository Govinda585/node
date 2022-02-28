class Logger extends EventEmitter{

    log(){
        console.log("this is a method inside a logger class")
         // raise an event
    this.emit("messageLogged", {id: 1, URL:"http://www.google.com"});
    }
}

module.exports = Logger;


// in next file 



const Logger = require("./extendingEvent")
const logger = new Logger();

// listen an event

logger.on("messageLogged", (args) =>{
    console.log("listener called", args)
})

logger.log();