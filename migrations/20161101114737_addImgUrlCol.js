
exports.up = function(knex, Promise) {
  return knex.schema.table('cats', function(table){
    table.string('imgURL')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('cats', function(table){
    table.dropColumn('imgURL')
    console.log("column removed")
  })
};
