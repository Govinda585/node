//2. connecting to mongodb

import mongoose from "mongoose";

// connect to mongodb
mongoose.connect("mongodb://localhost/practicedb").then(() => 
console.log("connected to mongodb")).catch((e) =>{
    console.log("could not connected to mongodb" + e)
})
// we should config or url in real world app
     // we should use debug in real world app
  // connect to local machine

  //********************************************************************************* */

  //3. Schema


// create schema

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: {type: Date, default: Date.new},
    isPublished: Boolean
})


  //********************************************************************************* */



// 4. Models

const Course = mongoose.model("Course", courseSchema); // Course is a class

// now we can create an object based on this Course class
const createCourse= async() =>{
const course = new Course({name: "Node js", author:"govinda", tags:["node js", "backend"], isPublished: true})

// Reminder: we have schema then we need compile that into model that give class
// next we create object based on the class and this object maps document in mongodb database.


//********************************************************************************* */

// 5. Saving a document


    const result = await course.save();
    console.log(result);
}

// createCourse();

//********************************************************************************* */


// 6. Query document (retrive document from mongodb database)

const getCourses = async() =>{
  const courses = await Course.find()
  .limit(1)
  .sort({name: 1})
  .select({name: 1});
  console.log(courses);
}

getCourses();


//********************************************************************************* */


// 7. Comparison query operators

// const courses = await Course.find({
//   price: {$ne: 10}
// })



//********************************************************************************* */


// 8. Logical query operators

// const courses = await Course.find().or({
//   [{price: 10}, {price: 20}]
// })

//********************************************************************************* */


// 9. Regular Expression

