"use strict";

module.exports = (sequelize, DataTypes) => {
  const recipeIngredients = sequelize.define(
    "recipeIngredients",
    {
      amount: DataTypes.INTEGER,
      recipeId: DataTypes.INTEGER,
      ingredientId: DataTypes.INTEGER,
    },
    {}
  );
  recipeIngredients.associate = function (models) {
    // associations can be defined here
  };
  return recipeIngredients;
};
