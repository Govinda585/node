const express = require("express");
const mongoose = require("mongoose");
const courseRouter = require("./routes/course");
const userRouter = require("./routes/user");
const authRouter = require("./routes/auth");
const env = require("dotenv");

const app = express();
app.use(express.json());
app.use("/course", courseRouter);
app.use("/user", userRouter);
app.use("/auth", authRouter);

if (!process.env.JWT_PRIVATE_KEY) {
  console.log("FATEL ERROR: jwtPrivateKey is not defined");
  process.exit(1);
}
const port = 3000;

mongoose
  .connect("mongodb://localhost/authpractice")
  .then(() => console.log("database connected"))
  .catch((e) => console.log(e.message));

app.listen(port, () => console.log(`app listen on port no ${port}`));
