const winston = require("winston");
require("winston-mongodb");

module.exports =  winston.createLogger({
    level:'info',
    metaKey:'metadata',
    transports:[new winston.transports.File({filename: 'error.log'}),
new winston.transports.MongoDB({db: 'mongodb://localhost:/database1'})]

})
