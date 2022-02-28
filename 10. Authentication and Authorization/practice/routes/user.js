const express = require("express");
const User = require("../models/user");
const lodash = require("lodash");
const bcrypt = require("bcrypt");
const router = express.Router();
const jwt = require("jsonwebtoken");
require("dotenv").config();
const auth = require("../middleware/auth");

// get current user ifno

router.get("/me", auth, async (req, res) => {
  const user = await User.findById(req.user._id);
  res.send(user);
});

// this route is for registeration

router.post("/", async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("user already registered.");

  user = new User(req.body);
  const salt = await bcrypt.genSalt(12);
  user.password = await bcrypt.hash(user.password, salt);

  const result = await user.save();

  // res.status(200).send({
  //   name: result.name,
  //   email: result.email,
  // });
  // const token = jwt.sign({ _id: user._id }, process.env.JWT_PRIVATE_KEY);
  const token = user.generateAuthToken();

  //using lodash
  res
    .status(200)
    .header("x-auth-token", token) // prefix header with x- in custom header, first is header name and second is value (token)
    .send(result);
});

module.exports = router;
