exports.up = function (knex) {
  return Promise.all([
    knex.schema.createTable("movieSchema", (table) => {
      table.increments("id").primary();
      table.string("title");
      table.string("rated");
      table.string("duration");
      table.string("releaseDate");
      table.string("description");
      table.decimal("avgReview");
      table.integer("numReviews");
      table.string("imageUrl");
      table.string("videoUrl");
      table.integer("metascore");
      table.integer("numUserReviews");
      table.integer("numCriticReviews");
      table.integer("popularity");
      table.integer("popularityChange");
      table.integer("oscars");
      table.integer("awards");
      table.integer("nominations");
    }),
    knex.schema.createTable("directorSchema", (table) => {
      table.increments("id").primary();
      table.string("director");
    }),
    knex.schema.createTable("directorsForSpecificMovie", (table) => {
      table.integer("movieId").unsigned().references("movieSchema.id");
      table.integer("directorId").unsigned().references("directorSchema.id");
    }),
    knex.schema.createTable("writerSchema", (table) => {
      table.increments("id").primary();
      table.string("writer");
    }),
    knex.schema.createTable("writerCategorySchema", (table) => {
      table.increments("id").primary();
      table.string("category");
    }),
    knex.schema.createTable("writersForSpecificMovie", (table) => {
      table.integer("movieId").unsigned().references("movieSchema.id");
      table.integer("writerId").unsigned().references("writerSchema.id");
      table
        .integer("writerCategoryId")
        .unsigned()
        .references("writerCategorySchema.id");
    }),
    knex.schema.createTable("starSchema", (table) => {
      table.increments("id").primary();
      table.string("star");
    }),
    knex.schema.createTable("starsForSpecificMovie", (table) => {
      table.integer("movieId").unsigned().references("movieSchema.id");
      table.integer("starId").unsigned().references("starSchema.id");
    }),
    knex.schema.createTable("categorySchema", (table) => {
      table.increments("id").primary();
      table.string("category");
    }),
    knex.schema.createTable("categoriesForSpecificMovie", (table) => {
      table.integer("movieId").unsigned().references("movieSchema.id");
      table.integer("categoryId").unsigned().references("categorySchema.id");
    }),
  ]);
};

exports.down = function (knex) {
  return Promise.all([
    knex.schema.dropTable("movieSchema"),
    knex.schema.dropTable("directorSchema"),
    knex.schema.dropTable("directorsForSpecificMovie"),
    knex.schema.dropTable("writerSchema"),
    knex.schema.dropTable("writerCategorySchema"),
    knex.schema.dropTable("writersForSpecificMovie"),
    knex.schema.dropTable("starSchema"),
    knex.schema.dropTable("starsForSpecificMovie"),
    knex.schema.dropTable("categorySchema"),
    knex.schema.dropTable("categoriesForSpecificMovie"),
  ]);
};
