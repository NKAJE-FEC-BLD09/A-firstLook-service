const categoriesForSpecificMovie = require("./../../data/categoriesForSpecificMovie");
const categorySchema = require("./../../data/categorySchema");
const directorSchema = require("./../../data/directorSchema");
const directorsForSpecificMovie = require("./../../data/directorsForSpecificMovie");
const movieSchema = require("./../../data/movieSchema");
const starSchema = require("./../../data/starSchema");
const starsForSpecificMovie = require("./../../data/starsForSpecificMovie");
const writerCategorySchema = require("./../../data/writerCategorySchema");
const writerSchema = require("./../../data/writerSchema");
const writersForSpecificMovie = require("./../../data/writersForSpecificMovie");

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return Promise.all([
    knex("directorsforspecificmovie").del(),
    knex("writersforspecificmovie").del(),
    knex("starsforspecificmovie").del(),
    knex("categoriesforspecificmovie").del(),
  ])
    .then(() => {
      return Promise.all([
        knex("movieschema").del(),
        knex("directorschema").del(),
        knex("writerschema").del(),
        knex("writercategoryschema").del(),
        knex("starschema").del(),
        knex("categoryschema").del(),
      ]);
    })
    .then(() => {
      return Promise.all([
        knex("movieschema").insert(movieSchema),
        knex("directorschema").insert(directorSchema),
        knex("writerschema").insert(writerSchema),
        knex("writercategoryschema").insert(writerCategorySchema),
        knex("starschema").insert(starSchema),
        knex("categoryschema").insert(categorySchema),
      ]);
    })
    .then(() => {
      return Promise.all([
        knex("directorsforspecificmovie").insert(directorsForSpecificMovie),
        knex("writersforspecificmovie").insert(writersForSpecificMovie),
        knex("starsforspecificmovie").insert(starsForSpecificMovie),
        knex("categoriesforspecificmovie").insert(categoriesForSpecificMovie),
      ]);
    })
    .catch((err) => console.log(err));
};
