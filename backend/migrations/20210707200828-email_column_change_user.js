'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.changeColumn('user', 'email', {
      type: Sequelize.STRING,
        allowNull: true,
        unique: true
    })
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('user');

  }
};
