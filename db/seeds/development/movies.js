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
    knex("movieSchema").del(),
    knex("directorSchema").del(),
    knex("directorsForSpecificMovie").del(),
    knex("writerSchema").del(),
    knex("writerCategorySchema").del(),
    knex("writersForSpecificMovie").del(),
    knex("starSchema").del(),
    knex("starsForSpecificMovie").del(),
    knex("categorySchema").del(),
    knex("categoriesForSpecificMovie").del(),
  ])
    .then(() => {
      return Promise.all([
        knex("movieSchema").insert(movieSchema),
        knex("directorSchema").insert(directorSchema),
        knex("writerSchema").insert(writerSchema),
        knex("writerCategorySchema").insert(writerCategorySchema),
        knex("starSchema").insert(starSchema),
        knex("categorySchema").insert(categorySchema),
      ]);
    })
    .then(() => {
      return Promise.all([
        knex("directorsForSpecificMovie").insert(directorsForSpecificMovie),
        knex("writersForSpecificMovie").insert(writersForSpecificMovie),
        knex("starsForSpecificMovie").insert(starsForSpecificMovie),
        knex("categoriesForSpecificMovie").insert(categoriesForSpecificMovie),
      ]);
    })
    .catch((err) => console.log(err));
};
