import express from "express";
import movies from "./routes/movies.js"
import morgan from "morgan"
import log from "./middleware/logger.js";
const app = express();

app.use(morgan("tiny"));
app.use(express.json());
app.use(log);
app.use("/api/movies", movies);

// defined port
const port = process.env.PORT || 3000;



// listen port 
app.listen(port, () =>{
    console.log(`server listen on port no ${port}`);
})
