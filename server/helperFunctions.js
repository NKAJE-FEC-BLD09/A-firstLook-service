const Promise = require("bluebird");
const db = require("./db");

let queries = [
  "SELECT * FROM movieSchema WHERE id = $1",
  "SELECT ds.director FROM directorsForSpecificMovie dfsm INNER JOIN directorSchema ds ON (dfsm.directorId=ds.id) WHERE movieId = $1",
  "SELECT ws.writer, wcs.category FROM writersForSpecificMovie wfsm INNER JOIN writerSchema ws ON (wfsm.writerId=ws.id) LEFT OUTER JOIN writerCategorySchema wcs ON (wfsm.writerCategoryId=wcs.id) WHERE movieId = $1",
  "SELECT ss.star FROM starsForSpecificMovie sfsm INNER JOIN starSchema ss ON (sfsm.starId=ss.id) WHERE movieId = $1",
  "SELECT cs.category FROM categoriesForSpecificMovie cfsm INNER JOIN categorySchema cs ON (cfsm.categoryId=cs.id) WHERE movieId = $1",
];

const getMovieDetails = (id) => {
  let details = [];
  for (let i = 0; i < queries.length; i++) {
    details.push(getPromise(queries[i], id));
  }
  return details;
};

const getPromise = (query, id) => {
  return new Promise((resolve, reject) => {
    db.query(query, [id], (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results.rows);
    });
  });
};

module.exports = {
  getMovieDetails,
};
