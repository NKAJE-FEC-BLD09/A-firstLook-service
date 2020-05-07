const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const Promise = require("bluebird");
const helpers = require("./helperFunctions");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/movies/:id", (req, res) => {
  let id = req.params.id;
  let movie = helpers.getMainMovieDetails(id);
  let directors = helpers.getDirectors(id);
  let writers = helpers.getWriters(id);
  let stars = helpers.getStars(id);
  let categories = helpers.getCategories(id);

  Promise.all([movie, directors, writers, stars, categories])
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => console.log(err));
});

app.post("api/movies/", (req, res) => {});

let port = 3001;
app.listen(port, () => console.log(`Listening on port ${port}`));
