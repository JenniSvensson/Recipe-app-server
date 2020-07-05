"use strict";
const Recipe = require("../models/").recipe;
const { Op } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const ingredient = sequelize.define(
    "ingredient",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      containsPeanut: { type: DataTypes.BOOLEAN, defaultValue: false },
      containsDairy: { type: DataTypes.BOOLEAN, defaultValue: false },
      containsEgg: { type: DataTypes.BOOLEAN, defaultValue: false },
      containsGluten: { type: DataTypes.BOOLEAN, defaultValue: false },
      containsSeafood: { type: DataTypes.BOOLEAN, defaultValue: false },
      containsSesame: { type: DataTypes.BOOLEAN, defaultValue: false },
      containsShellfish: { type: DataTypes.BOOLEAN, defaultValue: false },
      containsSoy: { type: DataTypes.BOOLEAN, defaultValue: false },
      containsMeat: { type: DataTypes.BOOLEAN, defaultValue: false },
      containsTreenuts: { type: DataTypes.BOOLEAN, defaultValue: false },
      containsWheat: { type: DataTypes.BOOLEAN, defaultValue: false },
    },
    {
      scopes: {
        vegan: {
          where: {
            [Op.and]: [
              { containsMeat: false },
              { containsDairy: false },
              { containsEgg: false },
              { containsSeafood: false },
              { containsShellfish: false },
            ],
          },
          include: [Recipe],
        },
        vegetarian: {
          where: {
            [Op.and]: [
              { containsMeat: false },
              { containsSeafood: false },
              { containsShellfish: false },
            ],
          },
          include: [Recipe],
        },
        glutenFree: {
          where: {
            containsGluten: false,
          },
          include: [Recipe],
        },
      },
    }
  );
  ingredient.associate = function (models) {
    ingredient.belongsToMany(models.recipe, {
      through: "recipeIngredients",
      foreignKey: "ingredientId",
    });
  };
  return ingredient;
};
