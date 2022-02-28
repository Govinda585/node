const express = require("express");
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const router = express.Router();
const Course = require("../models/course");

router.get("/", async (req, res) => {
  const course = await Course.find();
  res.status(200).send(course);
});

router.post("/", auth, async (req, res) => {
  const course = new Course({
    name: req.body.name,
  });
  const result = await course.save();
  res.status(200).send(result);
});

router.put("/", async (req, res) => {
  res.send("working");
});
router.delete("/:id/", [auth, admin], async (req, res) => {
  const course = await Course.findByIdAndRemove({ _id: req.params.id });
  console.log(course);
  res.send(course);
});

module.exports = router;
