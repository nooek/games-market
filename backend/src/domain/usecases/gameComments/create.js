const gameCommentsEntity = require("../../../entities/gameComments/index")

module.exports = class CreateGameCommentUsecase {
  constructor(commentsDb, moment) {
    this.commentsDb = commentsDb;
    this.moment = moment
  }

  async create(commentData) {
    const comment = gameCommentsEntity.validate(commentData)

    return await this.commentsDb.create({
        id: comment.getCommentId(),
        comment: comment.getComment(),
        date: this.moment().format("YYYY-MM-DD HH:mm:ss"),
        game_id: comment.getGameId(),
        user_id: comment.getUserId(),
    })
  }
}
