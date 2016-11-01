
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cats').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('cats').insert({id: 1, name: 'Kitty', lives: 99, lifestory: "Likes pot pie", imgURL:'https://d.ibtimes.co.uk/en/full/1392951/cat.jpg?w=400'}),
        knex('cats').insert({id: 2, name: 'Garfield', lives: 99, lifestory: "Hates mondays", imgURL:'http://wondrouspics.com/wp-content/uploads/2011/02/funny-cat.jpg'}),
        knex('cats').insert({id: 3, name: 'Grumpy Cat', lives: 99, lifestory: "Grumpy", imgURL:'https://pbs.twimg.com/profile_images/3634189225/86a97fb80635a68b0dde0fae08a992cf_400x400.png'}),
        knex('cats').insert({id: 4, name: 'Zoey', lives: 99, lifestory: "A bit bitey", imgURL:'https://thumbs.dreamstime.com/x/scared-british-shorthair-cat-hissing-17124938.jpg'}),
        knex('cats').insert({id: 5, name: 'Shiva', lives: 99, lifestory: "A big f*cking tiger", imgURL:'https://www.hamertonzoopark.com/images/tiger-land/tiger-land-2.jpg'}),
      ]);
    });
};
