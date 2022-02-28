const EventEmitter  = require("events");
const { emit } = require("process");


const emitter = new EventEmitter();

// Register a listener
emitter.on("messageLogged", (args) =>{ // we can called it any things args, e, eventArg.
    console.log("Listener called", args);
})


// Raise an Event

emitter.emit("messageLogged", {id: 1, URL: "http://"}) // if arguments are more than one
// then we should use obj. here obj is a event arguements.

