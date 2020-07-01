"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "recipes",
      [
        {
          name: "Mushroom pasta",
          imageUrl: "testtest",
          instructions: "1.boil water 2.cook pasta 3.fry mushrooms",
          preperationTime: 30,
          flavourProfile: "salty",
          dishType: "Dinner",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mudcake ",
          imageUrl: "testtest",
          instructions:
            "1.bring all the ing togheter 2. cook for 15 min in oven 3.serve with wippedcream",
          preperationTime: 30,
          flavourProfile: "sweet",
          dishType: "Dessert",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("recipes", null, {});
  },
};
