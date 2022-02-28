console.log(__filename); // print this filename 
console.log(__dirname); // print this dirname

const log = (message) =>{
console.log(message);
} // this function is private, we can make it public by exporting.



module.exports.log = log;