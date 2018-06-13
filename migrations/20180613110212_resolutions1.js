exports.up = function (knex, Promise) {
    return knex.schema.createTable('resolution', table => {
        table.increments();
        table.text('dueDate');
        table.text('resolution');
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('resolution')
};