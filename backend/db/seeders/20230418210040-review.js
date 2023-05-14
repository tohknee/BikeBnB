"use strict";
let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}
module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = "Reviews";
    return queryInterface.bulkInsert(options, [
      {
        userId: 1,
        spotId: 1,
        review: "this is good spot",
        stars: 5,
      },
      {
        userId: 1,
        spotId: 3,
        review: "this is good spot",
        stars: 5,
      },
      {
        userId: 1,
        spotId: 2,
        review: "spot not good",
        stars: 1,
      },
      {
        userId: 2,
        spotId: 1,
        review: "good spot",
        stars: 4,
      },
      {
        userId: 2,
        spotId: 2,
        review: "not good spot",
        stars: 2,
      },
      {
        userId: 3,
        spotId: 2,
        review: "user 3 review not good spot",
        stars: 2,
      },
      {
        userId: 3,
        spotId: 1,
        review: "user 3 review not good spot",
        stars: 1,
      },
      {
        userId: 4,
        spotId: 1,
        review: "I recently visited this place and I must say, the experience was amazing! The staff was super friendly and the facilities were top-notch. Definitely recommend this to anyone looking to have a great time!",
        stars: 1,
      },
      {
        userId: 4,
        spotId: 2,
        review: "I had a blast at this place with my friends. The atmosphere was great and the activities were so much fun. The only downside was the long wait times for certain things, but it was worth it in the end.",
        stars: 1,
      },
      {
        userId: 4,
        spotId: 3,
        review: "I wasn't sure what to expect when I came here, but I was pleasantly surprised. The staff was very accommodating and the equipment was well-maintained. Will definitely be coming back soon!",
        stars: 1,
      },
    
    ]);
  },

  async down(queryInterface, Sequelize) {
    options.tableName = "Reviews";
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      options,
      {
        userId: { [Op.in]: [1, 2] },
      },
      {}
    );
  },
};
