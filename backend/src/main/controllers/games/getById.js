module.exports = class GetByIdController {
  constructor(getGamesUsecase, MakeHttpResponse) {
    this.getGamesUsecase = getGamesUsecase;
    this.MakeHttpResponse = MakeHttpResponse;
  }

  async returnHttpResponse(httpRequest) {
    try {
      const { params } = httpRequest;

      const game = await this.getGamesUsecase.getById(params.id);
      return new this.MakeHttpResponse().make(game)
    } catch (e) {
      return new this.MakeHttpResponse().makeError(e)
    }
  }
};
