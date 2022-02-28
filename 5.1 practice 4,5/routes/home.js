import express from "express"
const router = express.Router();


// get request
router.get("/", (req,res) =>(
    // res.send("this is the home page")

    // this is for template engine. to render dynamic html
    res.render('index', {title:"My Express app", message:"Hello world!"})
))

export default router;