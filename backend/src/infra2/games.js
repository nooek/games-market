const { dev_games, games, played_games, rated_games } = require("../../models");

module.exports = class InfraGames {
  async createGame(game) {
    await games.create({
      id: game.id,
      name: game.name,
      description: game.description,
      thumbnail: game.thumbnail.url,
      game: game.game.url,
      price: parseFloat(game.price),
      owner: game.owner,
      category: game.categories.join(","),
    });
    await dev_games.create({
      id: game.devGamesId,
      dev_id: game.devId,
      game_id: game.id,
    });
  }

  async play(info) {
    await played_games.create({
      id: info.id,
      user_id: info.user_id,
      game_id: info.game_id,
    });
  }

  async checkPlayed(info) {
    const played = await played_games.findOne({
      where: { game_id: info.game_id, user_id: info.user_id },
    });
    return played;
  }

  async findRating(info) {
    const userRating = await rated_games.findOne({
      where: {
        user_id: info.userId,
        game_id: info.gameId,
      },
    });
    return userRating;
  }

  async unrate(id) {
    const unrated = await rated_games.destroy({
      where: {
        id: id,
      },
    });
    return unrated;
  }

  async rate(info) {
    const rated = await rated_games.create({
      id: info.id,
      user_id: info.user_id,
      game_id: info.game_id,
      rating: info.rating,
    });
    return rated;
  }

  async getById(id) {
    const query = `SELECT g.*, SUM(IF(rg.rating = 'like', 1, 0)) as likes, 
    SUM(IF(rg.rating ='dislike', 1, 0)) as dislikes FROM games AS g
        LEFT JOIN rated_games AS rg
        ON g.id = rg.game_id
        WHERE (g.price BETWEEN 0 AND 9999) AND (g.category LIKE "%") AND g.id = "${id}"
        GROUP BY g.id
        ORDER BY COUNT(rg.rating = "like") DESC;`;
    const game = await games.sequelize.query(query);
    return game;
  }

  async getByDev(dev) {
    const query = `
    SELECT g.*,
    SUM(IF(rg.rating='like', 1, 0)) AS likes,
    SUM(IF(rg.rating='dislike', 1, 0)) AS dislikes FROM games AS g
    LEFT JOIN rated_games AS rg
    ON g.id = rg.game_id AND g.owner = "${dev}"
    WHERE g.owner = "${dev}"
    ORDER BY g.id;
  `;
    const devGames = await games.sequelize.query(query);
    return devGames;
  }

  async getFreeGames() {
    const query = `
      SELECT * FROM games WHERE price = 0;
    `
    const freeGames = await games.sequelize.query(query);
    console.log(freeGames)
    return freeGames;
  }

  async getBestRatedGames() {
    const query = `
      SELECT games.* FROM games
      JOIN rated_games as rg
      ON rg.game_id = games.id
      WHERE rating = "like"
      GROUP BY game_id
      ORDER BY COUNT(rating = "like") DESC;
    `;
    const bestRatedGames = await games.sequelize.query(query);
    return bestRatedGames;
  }

  async filter(filter) {
    const query = `
    SELECT g.*,
    SUM(IF(rg.rating='like', 1, 0)) AS likes,
    SUM(IF(rg.rating='dislike', 1, 0)) AS dislikes FROM games AS g
    LEFT JOIN rated_games AS rg
    ON g.id = rg.game_id
    WHERE (${filter.price}) AND (g.category LIKE ${
      filter.categories ? filter.categories.join(" ") : "%"
    })
    GROUP BY g.id
    ORDER BY SUM(IF(rg.rating = "like", 1, 0)) ${filter.rating === true ? "DESC" : "ASC"};
  `;
    const gamesFiltered = await games.sequelize.query(query);
    return gamesFiltered;
  }

  async delete(gameId) {
    const gameDeleted = await games.destroy({
      where: { id: gameId }
    })
    return gameDeleted
  }
};
