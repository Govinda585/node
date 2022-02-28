const mongoose = require("mongoose");

// schema

const courseSchema = new mongoose.Schema({
    name:{
        type:String,
        maxlength: 10,
        minlength: 5,
    },
    number: {
        type: Number,
        required: true,

    }
});

// model

const Course = mongoose.model("Course", courseSchema);


module.exports = Course;


