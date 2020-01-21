
exports.up  = function(knex) {
  return knex.schema.createTable('songs', tbl =>  { 
      tbl.increments();
      tbl.string('make', 255).index();
      //video 1:28

      tbl.string('model').index()
  })
};

exports.down = function(knex) {
  
};
