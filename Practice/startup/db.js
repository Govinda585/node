const mongoose = require('mongoose');
const logger = require("../utils/logger");

module.exports = () =>{
// connect mongodb
mongoose.connect("mongodb://localhost/database1")
.then(() =>logger.info("mongodb connected to server"))
}