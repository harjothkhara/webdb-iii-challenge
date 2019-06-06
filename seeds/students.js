
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        { name: 'Andy', cohort_id: 1 },
        { name: 'Cash', cohort_id: 2 },
        { name: 'Thierry', cohort_id: 3 }
      ]);
    });
};
