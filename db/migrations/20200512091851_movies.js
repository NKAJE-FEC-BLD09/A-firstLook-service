exports.up = function (knex) {
  return Promise.all([
    knex.schema.createTable("movieschema", (table) => {
      table.increments("id").primary();
      table.string("title");
      table.string("rated");
      table.string("duration");
      table.string("releasedate");
      table.string("description");
      table.decimal("avgreview");
      table.integer("numreviews");
      table.string("imageurl");
      table.string("videourl");
      table.integer("metascore");
      table.integer("numuserreviews");
      table.integer("numcriticreviews");
      table.integer("popularity");
      table.integer("popularitychange");
      table.integer("oscars");
      table.integer("awards");
      table.integer("nominations");
    }),
    knex.schema.createTable("directorschema", (table) => {
      table.increments("id").primary();
      table.string("director");
    }),
    knex.schema.createTable("directorsforspecificmovie", (table) => {
      table.integer("movieid").unsigned().references("movieschema.id");
      table.integer("directorid").unsigned().references("directorschema.id");
    }),
    knex.schema.createTable("writerschema", (table) => {
      table.increments("id").primary();
      table.string("writer");
    }),
    knex.schema.createTable("writercategoryschema", (table) => {
      table.increments("id").primary();
      table.string("category");
    }),
    knex.schema.createTable("writersforspecificmovie", (table) => {
      table.integer("movieid").unsigned().references("movieschema.id");
      table.integer("writerid").unsigned().references("writerschema.id");
      table
        .integer("writercategoryid")
        .unsigned()
        .references("writercategoryschema.id");
    }),
    knex.schema.createTable("starschema", (table) => {
      table.increments("id").primary();
      table.string("star");
    }),
    knex.schema.createTable("starsforspecificmovie", (table) => {
      table.integer("movieid").unsigned().references("movieschema.id");
      table.integer("starid").unsigned().references("starschema.id");
    }),
    knex.schema.createTable("categoryschema", (table) => {
      table.increments("id").primary();
      table.string("category");
    }),
    knex.schema.createTable("categoriesforspecificmovie", (table) => {
      table.integer("movieid").unsigned().references("movieschema.id");
      table.integer("categoryid").unsigned().references("categoryschema.id");
    }),
  ]);
};

exports.down = function (knex) {
  return Promise.all([
    knex.schema.dropTable("directorsforspecificmovie"),
    knex.schema.dropTable("writersforspecificmovie"),
    knex.schema.dropTable("starsforspecificmovie"),
    knex.schema.dropTable("categoriesforspecificmovie"),
  ]).then(() => {
    return Promise.all([
      knex.schema.dropTable("movieschema"),
      knex.schema.dropTable("directorschema"),
      knex.schema.dropTable("writerschema"),
      knex.schema.dropTable("writercategoryschema"),
      knex.schema.dropTable("starschema"),
      knex.schema.dropTable("categoryschema"),
    ]);
  });
};
