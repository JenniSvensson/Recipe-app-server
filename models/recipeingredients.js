"use strict";

module.exports = (sequelize, DataTypes) => {
  const recipeIngredients = sequelize.define(
    "recipeIngredients",
    {
      amount: DataTypes.STRING,
    },
    {}
  );
  recipeIngredients.associate = function (models) {
    recipeIngredients.belongsTo(models.recipe);
    recipeIngredients.belongsTo(models.ingredients);
  };
  return recipeIngredients;
};
