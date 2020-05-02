const { Pool } = require("pg");
let config = {
  user: "me",
  password: "password",
  database: "movies",
  host: "localhost",
  port: 5432,
};
const pool = new Pool(config);

pool.on("error", (err, client) => {
  console.error("Unexpected error on idle client", err);
  process.exit(-1);
});

module.exports = {
  query: (text, params, callback) => {
    console.log("hello?");
    return pool.query(text, params, callback);
  },
};
