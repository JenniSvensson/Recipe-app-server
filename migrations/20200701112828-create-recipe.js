"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("recipes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      name: { type: Sequelize.STRING },
      instructions: {
        type: Sequelize.TEXT,
      },
      imageUrl: { type: Sequelize.STRING },

      preperationTime: {
        type: Sequelize.INTEGER,
      },
      flavourProfile: {
        type: Sequelize.STRING,
      },
      dishType: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("recipes");
  },
};
