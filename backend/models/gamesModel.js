module.exports = (sequelize, DataTypes) => {
  const Games = sequelize.define('games', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING,
      validate: {
        max: {
          args: [32],
          msg: "The maximum is 28 characters",
        },
        min: {
          args: [3],
          msg: "The minimum is 3 characters",
        },
      },
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      validate: {
        max: {
          args: [200],
          msg: "The maximum is 200 characters"
        },
      }
    },
    thumbnail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    game: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    owner: {
      type: DataTypes.STRING,
      allowNull: false
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })

  Games.associate = (models) => {
    Games.hasMany(models.dev_games, {
      foreignKey: "game_id",
      onDelete: "cascade"
    })
    Games.hasOne(models.played_games, {
      foreignKey: 'game_id',
      onDelete: 'cascade'
    })
    Games.hasOne(models.rated_games, {
      foreignKey: 'game_id',
      onDelete: 'cascade'
    })
    Games.hasMany(models.Comments, {
      foreignKey: 'game_id',
      onDelete: 'cascade'
    })
  }

  return Games;
}
