"use strict";

module.exports = (sequelize, DataTypes) => {
  const recipeIngredients = sequelize.define(
    "recipeIngredients",
    {
      amount: DataTypes.STRING,
      recipeId: DataTypes.INTEGER,
      ingredientId: DataTypes.INTEGER,
    },
    {}
  );
  recipeIngredients.associate = function (models) {
    recipeIngredients.belongsTo(models.recipe);
    recipeIngredients.belongsTo(models.ingredient);
  };
  return recipeIngredients;
};
