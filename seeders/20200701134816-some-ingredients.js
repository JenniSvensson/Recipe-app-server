"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "ingredients",
      [
        {
          name: "egg",
          containsEgg: true,
          containsMeat: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "milk",
          containsDairy: true,
          containsMeat: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "flour",
          containsGluten: true,
          containsMeat: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "mushroom",
          containsMeat: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "pasta",
          containsMeat: false,
          containsGluten: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("ingredients", null, {});
  },
};
