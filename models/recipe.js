"use strict";

module.exports = (sequelize, DataTypes) => {
  const recipe = sequelize.define(
    "recipe",
    {
      instructions: {
        type: DataTypes.STRING,
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
    // associations can be defined here
  };
  return recipe;
};
