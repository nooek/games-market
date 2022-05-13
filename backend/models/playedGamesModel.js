module.exports = (sequelize, DataTypes) => {
  const PlayedGames = sequelize.define(
    'played_games',
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
      },
    },
    {
      freezeTableName: true
    }
  )

  return PlayedGames
}