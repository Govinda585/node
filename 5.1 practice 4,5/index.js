// 3. building your first web app

import express from "express";
import debug from "debug";
import config from "config"
import helmet from 'helmet';
import morgan from "morgan";
import log from "./middleware/logger.js";
import courses from "./routes/courses.js";
import home from "./routes/home.js"


// debugger
const startupDebugger = debug("app:start");
const dbDebugger = debug("app:db");
startupDebugger("starup deubgger");
dbDebugger("this debugger for db");
const app = express();


// template engine

app.set("view engine", "pug"); // no need to import
app.set("views", "./views")// this is optional, if we need to override or pass view 
// from one engine to another.


app.use(helmet()); // secure HTTP request
if(app.get('env') === 'development'){
app.use(morgan('tiny')); // HTTP request logger
}
app.use(express.json()); // json parser
app.use(express.urlencoded({extended: true})) // url encoder
app.use(express.static('public')); // read static content like css, img and so on.
app.use(log)
app.use("/api/courses", courses)
app.use("/", home);
// environment
console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
console.log(`env: ${app.get('env')}`);


// configuration
console.log(`Application Name: ${config.get("name")}`);
console.log(`Mail Server: ${config.get("mail.host")}`)
console.log(`Mail Password: ${config.get("mail.password")}`)

const port = process.env.PORT || 3000;

app.listen(port, () =>{
    console.log(`app listen on port no ${port}...`)
})


