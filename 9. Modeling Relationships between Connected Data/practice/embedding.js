// 2. Embedding Documents

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/population")
.then(() => console.log("connected"))
.catch(() => console.log("error"))

// author schema
const authorSchema = new mongoose.Schema({
    name: String,
    bio: String,
    website: String
})

// author model

const Author = mongoose.model("author", authorSchema);

// course schema

const courseSchema = new mongoose.Schema({
    name: String,
    author: {type: authorSchema, required: true} // point to remember 
})

// course model
const Course = mongoose.model("course", courseSchema);

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

const findCourse = async() =>{
    const course = Course.find();
    console.log((course))
}

// createCourse("node course", new Author({name:"govinda", bio:"web developer", website:"govinda.com"}));
// createAuthor();
// findCourse();

// output
// {
//     name: 'node course',
//     author: {
//       name: 'govinda',
//       bio: 'web developer',
//       website: 'govinda.com',
//       _id: new ObjectId("61bd837c39b59b1967c57001")
//     },
//     _id: new ObjectId("61bd837c39b59b1967c57002"),
//     __v: 0
//   }

// NOTE: author sub-document are like normal document so most features available in normal
// document are also available in sub-document like we can implement validation, value should
// be required

// updateAuthor

const updateAuthor = async(courseId) =>{
    const course = await Course.findById(courseId);
    course.author.name = "MERN Stack";
    course.save();
}

// updateAuthor("61bd837c39b59b1967c57002");


// update direct without first fetching

const updateAuthorDirect = async(courseId) =>{
const course = await Course.updateOne({_id: courseId}, new Set({
    'author.name' : 'govinda'
}))
}
// remove subdocument using unset operator

