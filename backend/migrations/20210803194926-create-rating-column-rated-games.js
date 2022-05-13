'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.addColumn(
      'rated_games',
      'rating',
      {
        type: Sequelize.STRING,
        allowNull: false
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.removeColumn('rated_games', 'rating')
  }
};
