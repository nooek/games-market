'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.addColumn(
      'games',
      'category',
      {
        type: Sequelize.STRING
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.removeColumn('games', 'category')
  }
};
