module.exports = (sequelize, DataTypes) => {
  const DevGamesModel = sequelize.define('dev_games', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    }
  },
  {
    freezeTableName: true,
  },)

  return DevGamesModel
}