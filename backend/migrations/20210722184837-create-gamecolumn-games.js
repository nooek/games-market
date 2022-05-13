'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.addColumn(
      'games',
      'game',
      {
        type: Sequelize.STRING,
        allowNull: false,
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.removeColumn('games', 'game')
  }
};
