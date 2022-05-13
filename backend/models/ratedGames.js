module.exports = (sequelize, DataTypes) => {
  const RatedGames = sequelize.define(
    'rated_games',
    {
      id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      rating: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      freezeTableName: true
    }
  )

  return RatedGames
}
