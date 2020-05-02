const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const db = require("./db");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/movies/:id", (req, res) => {
  let id = req.params.id;
  db.query("SELECT * FROM movies WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    console.log(results.rows);
    res.status(200).json(results.rows);
  });
});

app.post("api/movies/", (req, res) => {});

let port = 3001;
app.listen(port, () => console.log(`Listening on port ${port}`));
