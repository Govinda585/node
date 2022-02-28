// 1. Referencing documents

const mongoose = require("mongoose");

// MONGODB CONNECTION

mongoose.connect("mongodb://localhost/population").then(() => console.log("connected"))
.catch((error) => console.log("error", error))

const authorSchema = new mongoose.Schema({
    name: String,
    bio: String,
    website: String
})

const Author = mongoose.model("Author", authorSchema);

const courseSchema = new mongoose.Schema({
    name: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author'
    }
  
})

const Course = mongoose.model("Course", courseSchema);


const createAuthor = async(name, bio, website) =>{
    const author = new Author({
        name,
        bio,
        website
    })
    const result = await author.save();
    console.log(result)
    }

const createCourse = async(name, author) =>{
const course = new Course({
    name,
    author
})
const result = await course.save();
console.log(result)
}

const listCourse = async() =>{
    const courses = await Course.find().populate('author', 'name') // populated method fetch ref document data
    // we we only want to fetch name of author not all property then use populate('author','name');
    console.log(courses)
}

// createAuthor('Govinda', 'bio', 'webiste');
// createCourse("node js", "61bc0159896eaab2214b58b1");
// listCourse();

// in course if we chanage the authorid that does not affect course
// document and it thorw null in author

//*******************************************************************************************


