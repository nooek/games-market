module.exports = class FilterGamesController {
  constructor(filterGamesUsecase, MakeHttpResponse) {
    this.filterGamesUsecase = filterGamesUsecase;
    this.MakeHttpResponse = MakeHttpResponse;
  }

  async returnHttpResponse(httpRequest) {
    try {
      const { body } = httpRequest;

      const filteredGames = await this.filterGamesUsecase.filter(body);

      return new this.MakeHttpResponse().make(filteredGames)
    } catch (e) {
      console.log(e);
      return new this.MakeHttpResponse().makeError(e)
    }
  }
};
