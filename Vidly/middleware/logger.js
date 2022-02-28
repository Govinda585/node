// middleware to log 

const log = (req, res, next) =>{
console.log("login the request...")
next();
}

export default log;

