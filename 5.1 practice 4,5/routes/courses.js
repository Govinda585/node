import express from "express"
import Joi from "joi";


const router = express.Router();


const courses = [{
    id: 1,
    name: "java"
}, {
    id: 2,
    name: "computer security"
},
{id:3, 
name: "blockchain course"}]


const schema = Joi.object({
    name: Joi.string().min(3).required()
})


// get all courses

router.get("/", (req, res) =>{
    res.send(courses);
})

// route parameters

// app.get("/api/courses/:id", (req,res) =>[
//     res.send(req.params.id)
// ])

// query string paramters

router.get("/?sortBy=name", (req, res) =>{
    res.send(req.query);
})

// GET SIGNLE COURSE FROM THE SERVER

router.get("/:id", (req, res) =>{
    const course = courses.find((c) => c.id === parseInt(req.params.id));
    if(!course) return res.status(404).send("course with given id was not found!")
    res.send(course);
})

// HTTP POST REQUEST
router.post("/", (req, res) =>{
    // if(!req.body.name || req.body.name.length < 3) return res.status(400).send("name must be include and length should be > 3");
   

    // input validation
const result = schema.validate(req.body);
if(result.error) return res.status(400).send( result.error.details[0].message)
    const course = {id: courses.length + 1, name: req.body.name};
    courses.push(course);
    res.send(course);
})


// HTTP PUT REQUEST
router.put("/:id", (req, res) =>{

    // find course
    const course = courses.find((c) => c.id === parseInt(req.params.id));

    // if not exist return 404
    if(!course) return res.status(404).send("course not found")

    // validate the course, if invalid return 400
    const result = schema.validate(req.body)
    if(result.error) return res.status(400).send(result.error.details[0].message)
    
    //update course
    course.name = req.body.name;

    // return course
    res.send(courses);
})

//HTTP DELETE REQUEST

router.delete("/:id", (req, res) =>{
  // look up the course
  const course = courses.find((c) => c.id === parseInt(req.params.id))
  // not exist return 404
  if(!course) return res.status(404).send("course not found");
  // if exist then delete
  const index = courses.indexOf(course);
  courses.splice(index, 1);
  // return the deleted source to client

  res.send(course)
})


export default router;