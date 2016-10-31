
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cats').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('cats').insert({id: 1, name: 'Kitty', lives: 99, lifestory: "Likes pot pie"}),
        knex('cats').insert({id: 2, name: 'Garfield', lives: 99, lifestory: "Hates mondays"}),
        knex('cats').insert({id: 3, name: 'Grumpy Cat', lives: 99, lifestory: "Grumpy"}),
        knex('cats').insert({id: 4, name: 'Zoey', lives: 99, lifestory: "A bit bitey"}),
        knex('cats').insert({id: 5, name: 'Shiva', lives: 99, lifestory: "A big f*cking tiger"}),
      ]);
    });
};
