const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 5,
    maxlength: 50,
    required: true,
  },
  email: {
    type: String,
    minlength: 7,
    maxlength: 250,
    unique: true,
    require: true,
  },
  password: {
    type: String,
    minlength: 5,
    maxlength: 1024,
    require: true,
  },
  isAdmin: Boolean,
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    { _id: this._id, isAdmin: this.isAdmin },
    process.env.JWT_PRIVATE_KEY
  );
  return token;
};
userSchema.methods;
const User = mongoose.model("user", userSchema);

module.exports = User;
