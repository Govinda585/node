const express = require("express");
const Course = require("../models/course");
const asyncMiddleware = require("../middleware/asyc")
const router = express.Router();





// GET courses
router.get("/",  asyncMiddleware(async(req, res) =>{
  throw new Error("someting wrong");
  const course = await Course.find();
  res.send(course);
}))


// POST course

router.post("/", async(req, res) =>{
    const course = new Course(req.body);
    const result = await course.save();
    res.send(result);
})

// PUT course

router.put("/:id", async(req, res) =>{
  const course = await Course.findByIdAndUpdate(req.params.id);
  course.name = req.body.name;
  course.number = req.body.number;
  await course.save();
  res.send(course);
})

// DELETE course

router.delete("/:id", async(req, res) =>{
  const course = await Course.findByIdAndRemove(req.params.id);
  res.send(course);
})

// DELETE all course

router.delete("/", async(req, res) =>{
 await Course.deleteMany();
 res.send("all course deleted");

})

module.exports = router;