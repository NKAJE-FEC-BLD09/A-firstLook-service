const Promise = require("bluebird");
const db = require("./db");

const getMainMovieDetails = (id) => {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT * FROM movieSchema WHERE id = $1",
      [id],
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results.rows);
      }
    );
  });
};

const getDirectors = (id) => {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT ds.director FROM directorsForSpecificMovie dfsm INNER JOIN directorSchema ds ON (dfsm.directorId=ds.id) WHERE movieId = $1",
      [id],
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results.rows);
      }
    );
  });
};

const getWriters = (id) => {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT ws.writer, wcs.category FROM writersForSpecificMovie wfsm INNER JOIN writerSchema ws ON (wfsm.writerId=ws.id) LEFT OUTER JOIN writerCategorySchema wcs ON (wfsm.writerCategoryId=wcs.id) WHERE movieId = $1",
      [id],
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results.rows);
      }
    );
  });
};

const getStars = (id) => {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT ss.name FROM starsForSpecificMovie sfsm INNER JOIN starSchema ss ON (sfsm.starId=ss.id) WHERE movieId = $1",
      [id],
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results.rows);
      }
    );
  });
};

const getCategories = (id) => {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT cs.category FROM categoriesForSpecificMovie cfsm INNER JOIN categorySchema cs ON (cfsm.categoryId=cs.id) WHERE movieId = $1",
      [id],
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results.rows);
      }
    );
  });
};

module.exports = {
  getMainMovieDetails,
  getDirectors,
  getWriters,
  getStars,
  getCategories,
};
