"use strict";

module.exports = (sequelize, DataTypes) => {
  const ingredient = sequelize.define(
    "ingredient",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      containsPeanut: DataTypes.BOOLEAN,
      containsDairy: DataTypes.BOOLEAN,
      containsEgg: DataTypes.BOOLEAN,
      containsGluten: DataTypes.BOOLEAN,
      containsSeafood: DataTypes.BOOLEAN,
      containsSesame: DataTypes.BOOLEAN,
      containsShellfish: DataTypes.BOOLEAN,
      containsSoy: DataTypes.BOOLEAN,
      containsMeat: DataTypes.BOOLEAN,
      containsTreenuts: DataTypes.BOOLEAN,
      containsWheat: DataTypes.BOOLEAN,
    },
    {}
  );
  ingredient.associate = function (models) {
    ingredient.belongsToMany(models.recipe, {
      through: "recipeingredients",
      foreignKey: "ingredientId",
    });
  };
  return ingredient;
};
