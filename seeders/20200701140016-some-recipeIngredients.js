"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("recipeIngredients", [
      {
        amount: "2",
        recipeId: 2,
        ingredientId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        amount: "1,5 dl",
        recipeId: 2,
        ingredientId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        amount: "250g",
        recipeId: 1,
        ingredientId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        amount: "5 big mushrooms",
        recipeId: 1,
        ingredientId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        amount: "1 dl",
        recipeId: 2,
        ingredientId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        amount: "100 g",
        recipeId: 2,
        ingredientId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        amount: "100 g",
        recipeId: 1,
        ingredientId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("recipeIngredients", null, {});
  },
};
