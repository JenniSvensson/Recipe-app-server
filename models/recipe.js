"use strict";

module.exports = (sequelize, DataTypes) => {
  const recipe = sequelize.define(
    "recipe",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      imageUrl: { type: DataTypes.STRING, allowNull: false },

      instructions: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      preperationTime: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      flavourProfile: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dishType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {}
  );
  recipe.associate = function (models) {
    recipe.belongsTo(models.user);
    recipe.belongsToMany(models.ingredient, {
      through: "recipeingredients",
      foreignKey: "recipeId",
    });
  };
  return recipe;
};
