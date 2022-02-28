const EventEmitter = require("events"); // EventEmitter is a class that's why it pascal casing.
const { METHODS } = require("http");
const { emit } = require("process");
// class is a container for properties and function which is called method.

// crate instance or object of the class to use this EventEmitter

const emitter = new EventEmitter(); // class is like human and obj is like John.

// emitter is an object. this is the one we are going to use. this emitter have METHODS.
// mostly we use emit and 



// register a listener
emitter.on("messageLogged", () =>{
    console.log("listener called")
}) // on and addListener are same
//messageLogged is a event and another is callback function or actual listener




// raise an event
emitter.emit('messageLogged') //emit mean making a noise or producing something// signalling
// messageLogged (name of the event);
// every time we log a message then this event raised.
// we also need listen.
// listen is a functin that will be called when the event raised.


// note: order is important first we have to listen then call the event.
