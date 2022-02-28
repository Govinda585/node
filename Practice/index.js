const express = require("express");
const app = express();
require("./startup/routes")(app);
require('./startup/db')();

const port = 3000;

// connect server
app.listen(port, () =>console.log(`server running on port ${port}`));