const express = require("express");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const router = express.Router();
// this route is for login
router.post("/", async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Invalid email or password");
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send("Invalid email or password");
  // const token = jwt.sign({ _id: user._id }, process.env.JWT_PRIVATE_KEY); // never store secret in source code, store in env.
  const token = user.generateAuthToken();
  res.status(200).send(token);
});
console.log(process.env.JWT_PRIVATE_KEY);
module.exports = router;
