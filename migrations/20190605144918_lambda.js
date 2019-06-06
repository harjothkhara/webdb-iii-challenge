//implement changes to the schema
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cohorts', table => {
      //each table needs a primary key
      //we'll call it id, integer, auto-increment
      table.increments();

      table
        .string('name', 128)
        .notNullable()
        .unique();
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
