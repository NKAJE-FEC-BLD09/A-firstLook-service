const path = require("path");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const Promise = require("bluebird");
const helpers = require("./helperFunctions");
const cors = require("cors");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, "../build")));
app.use(cors());

app.get("/api/movies/:id", (req, res) => {
  let id = req.params.id;
  let details = helpers.getMovieDetails(id);

  Promise.all(details)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => console.log(err));
});

app.post("api/movies/", (req, res) => {});

let port = 3001;
app.listen(port, () => console.log(`Listening on port ${port}`));
