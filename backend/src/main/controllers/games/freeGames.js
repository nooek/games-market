module.exports = class FreeGamesController {
  constructor(getGamesUsecase, MakeHttpResponse) {
    this.getGamesUsecase = getGamesUsecase;
    this.MakeHttpResponse = MakeHttpResponse;
  }

  async returnHttpResponse() {
    try {
      const game = await this.getGamesUsecase.freeGames();
      return new this.MakeHttpResponse().make(game)
    } catch (e) {
      console.log(e);
      return new this.MakeHttpResponse().makeError(e)
    }
  }
};
