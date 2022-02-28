import express from "express";
import Joi from "joi"
const router = express.Router();
const schema = Joi.object({
 movie_name: Joi.string().min(3).required()
})

// list of movies
const movies = [{
    "id": 1,
    "movie_name": "Bruis",
    "imd_rating": 41,
    "actor": "QuamTurpisAdipiscing.xls"
  }, {
    "id": 2,
    "movie_name": "Mattheus",
    "imd_rating": 76,
    "actor": "VelNulla.ppt"
  }, {
    "id": 3,
    "movie_name": "Rhianon",
    "imd_rating": 44,
    "actor": "Mattis.xls"
  }, {
    "id": 4,
    "movie_name": "Elliot",
    "imd_rating": 29,
    "actor": "LigulaSit.xls"
  }, {
    "id": 5,
    "movie_name": "Culley",
    "imd_rating": 54,
    "actor": "Id.avi"
  }, {
    "id": 6,
    "movie_name": "Kienan",
    "imd_rating": 31,
    "actor": "Massa.txt"
  }, {
    "id": 7,
    "movie_name": "Devin",
    "imd_rating": 95,
    "actor": "VariusIntegerAc.tiff"
  }, {
    "id": 8,
    "movie_name": "Killian",
    "imd_rating": 49,
    "actor": "NonLectus.xls"
  }, {
    "id": 9,
    "movie_name": "Bent",
    "imd_rating": 19,
    "actor": "VenenatisLacinia.txt"
  }, {
    "id": 10,
    "movie_name": "Jared",
    "imd_rating": 79,
    "actor": "Mollis.avi"
  }]
  


//FETCH ALL MOVIES

router.get("/", (req, res) =>{
    
    res.send(movies);
})

// FETCH SPECIFIC MOVIES BY ID

router.get("/:id", (req, res) =>{

    const movie = movies.find((m) => m.id === parseInt(req.params.id));
    // validate
    if(!movie) return res.status(404).send("movie with this id not found!");
    res.send(movie);
})

//  POST MOVIE

router.post("/", (req, res) =>{
    const movie = req.body
    if(!movie) return res.status(400).send("movie shold not be null!");
    const result = schema.validate(req.body.movie_name);
    if(result.error) return res.status(400).send(result.error.details[0].message);
    movies.push(movie);
    res.send(movie);
})

// PUT MOVIE
router.put("/:id", (req,res) =>{
    const movie = movies.find((m) => m.id === parseInt(req.params.id) )
    if(!movie) return res.status(404).send("movie not found with this id!");
    movie.movie_name = req.body.movie_name;
    const result = schema.validate(req.body.movie_name)
    if(result.error) return res.status(400).send(result.error.details[0].message);
    res.send(movie);
})

//DELETE MOVIE
router.delete("/:id", (req, res) =>{
    const movie = movies.find((m) => m.id === parseInt(req.params.id))
    if(!movie) return res.status(404).send("movie not found with this id!");
    const index = movies.indexOf(movie);
    movies.splice(index, 1);
    res.send(movie)
})


export default router;