//implement changes to the schema
exports.up = function(knex, Promise) {
  return knex.scheme.createTable('cohorts', tbl => {
      //each table needs a primary key
      //we'll call it id, integer, auto-increment
      tbl.increments();

      tbl
        .string('name, 123')
        .notNullable()
        .unique();

      tbl.timestamps(true, true); //created_at and updated_at
  })
};
    //undo the changes
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('cohorts');
};

//defined the schema of our roles table in JS

//npx knex init - create a fresh knexfile
//npx knex migrate:make create_roles_table - create a named migration file
//npx knex migrate:latest - run all migrations that have not yet run