// 5. Using an array of sub-documents

const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost/population")
.then(() => console.log("connected"))
.catch(() => console.log("error"))


// author schema

const authorSchema = new mongoose.Schema({
    name: String,
    bio: String,
    website: String
});

// author model

const Author = mongoose.model("author", authorSchema);

// course schema

const courseSchema = new mongoose.Schema({
    name: String,
    authors: [authorSchema]     
})

// course model

const Course = mongoose.model("course", courseSchema);


const createCourse = async(name, authors) =>{

    const course = new Course({
        name,
        authors,
    })

    await course.save();

}

const listCourse = async() =>{
    const course = await Course.find();
    console.log(course)
}


// createCourse("node js", [new Author({name: "govinda"}), new Author({name:"ramesh"})])
// listCourse();


//**************************************************

//We can also add author to array later on:

const addAuthor = async(courseId, author) =>{

    const course = await Course.findById(courseId);
    course.authors.push(author);
    course.save();
}

// addAuthor("61bea5917e264fbc31258ee2", new Author({name:"new array"}))

//****************************************************

// Remove an author

const removeAuthor = async(courseId, authorId) =>{
const course = await Course.findById(courseId);
const author = course.authors.id(authorId);
author.remove();
course.save();
}

// removeAuthor("61bea5917e264fbc31258ee2", "61bea5917e264fbc31258ee0");



















