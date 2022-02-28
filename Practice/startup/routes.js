const express = require("express");
const course = require("../routes/course")
const error = require("../middleware/error")
module.exports = (app) =>{
    app.use(express.json());
    app.use("/api/course", course);
    app.use(error);
}