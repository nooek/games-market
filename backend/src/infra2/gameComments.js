const { Comments } = require("../../models");

module.exports = class GameCommentsInfra {
  async create(comment) {
    const create = await Comments.create(comment);
    return create
  }

  async getCommentsByGame(data) {
    const query = `
      SELECT c.*, u.username FROM comments as c
      LEFT JOIN user AS u ON c.game_id = "${data.gameId}" AND c.user_id = u.id
      WHERE c.game_id = "${data.gameId}" AND c.user_id = u.id
      ORDER BY c.date DESC;
    `;

    const comments = await Comments.sequelize.query(query);
    return comments
  }
};
