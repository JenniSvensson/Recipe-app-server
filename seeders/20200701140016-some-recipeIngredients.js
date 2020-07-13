"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("recipeIngredients", [
      {
        amount: "600g",
        recipeId: 1,
        ingredientId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        amount: "1",
        recipeId: 1,
        ingredientId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        amount: "5",
        recipeId: 1,
        ingredientId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        amount: "1/2 cup",
        recipeId: 1,
        ingredientId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        amount: "2 teaspoons",
        recipeId: 1,
        ingredientId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        amount: "2 teaspoon",
        recipeId: 1,
        ingredientId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        amount: "2 tablespoons",
        recipeId: 1,
        ingredientId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        amount: "1",
        recipeId: 1,
        ingredientId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        amount: "1",
        recipeId: 1,
        ingredientId: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        amount: "3",
        recipeId: 1,
        ingredientId: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        amount: "1",
        recipeId: 1,
        ingredientId: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        amount: "1 tbs",
        recipeId: 2,
        ingredientId: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        amount: "1",
        recipeId: 2,
        ingredientId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        amount: "2",
        recipeId: 2,
        ingredientId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        amount: "1",
        recipeId: 2,
        ingredientId: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        amount: "1 tsp",
        recipeId: 2,
        ingredientId: 13,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        amount: "1 tsp",
        recipeId: 2,
        ingredientId: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        amount: "1 tbs",
        recipeId: 2,
        ingredientId: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        amount: "2 x 400g",
        recipeId: 2,
        ingredientId: 16,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        amount: "1/2 cup",
        recipeId: 2,
        ingredientId: 17,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        amount: "500ml",
        recipeId: 2,
        ingredientId: 18,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        amount: "500g",
        recipeId: 3,
        ingredientId: 19,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        amount: "400g",
        recipeId: 3,
        ingredientId: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        amount: "50g",
        recipeId: 3,
        ingredientId: 21,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        amount: "2 x 250g",
        recipeId: 3,
        ingredientId: 22,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("recipeIngredients", null, {});
  },
};
