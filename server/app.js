const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const db = require("./db");
app.use(bodyParser.json());

let port = 3001;
app.listen(port, () => console.log(`Listening on port ${port}`));
