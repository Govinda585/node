const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
  const token = req.header("x-auth-token");
  if (!token) return res.status(401).send("Access denied. No token provided");

  try {
    const decoded = jwt.verify(token, process.env.JWT_PRIVATE_KEY);
    req.user = decoded;
    console.log(decoded);
    next();
  } catch (e) {
    res.status(400).send("Invalid token");
  }
};
