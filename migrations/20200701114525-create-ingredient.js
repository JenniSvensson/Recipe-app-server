"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("ingredients", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      containsPeanut: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      containsDairy: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      containsEgg: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      containsGluten: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      containsSeafood: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      containsSesame: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      containsShellfish: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      containsSoy: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      containsMeat: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      containsTreenuts: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      containsWheat: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
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
    await queryInterface.dropTable("ingredients");
  },
};
