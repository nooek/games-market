'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.addColumn(
      'games',
      'price',
      {
        type: Sequelize.FLOAT,
        allowNull: false,
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.removeColumn('games', 'prices')
  }
};
