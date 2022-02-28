const logger = require("../utils/logger")
module.exports = function (er, req, res, next){

logger.error(er.message, er)


// as the first argument in log method we need pass logging level
// logging level determine the important of logging message
// we have level like this
//error, warn, info, verbose, debug, silly
    res.status(500).send("something went wrong!");
}