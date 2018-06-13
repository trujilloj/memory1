const resolutions = require('../resolutions');

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('resolution').del()
    .then(function () {
      // Inserts seed entries
      return knex('resolution').insert(resolutions);
    }).then(() => {
      return knex.raw("ALTER SEQUENCE resolution_id_seq RESTART WITH 4;");
    });
};