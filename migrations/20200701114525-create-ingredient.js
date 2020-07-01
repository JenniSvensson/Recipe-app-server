'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ingredients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      containsPeanut: {
        type: Sequelize.BOOLEAN
      },
      containsDairy: {
        type: Sequelize.BOOLEAN
      },
      containsEgg: {
        type: Sequelize.BOOLEAN
      },
      containsGluten: {
        type: Sequelize.BOOLEAN
      },
      containsSeafood: {
        type: Sequelize.BOOLEAN
      },
      containsSesame: {
        type: Sequelize.BOOLEAN
      },
      containsShellfish: {
        type: Sequelize.BOOLEAN
      },
      containsSoy: {
        type: Sequelize.BOOLEAN
      },
      containsMeat: {
        type: Sequelize.BOOLEAN
      },
      containsTreenuts: {
        type: Sequelize.BOOLEAN
      },
      containsWheat: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ingredients');
  }
};