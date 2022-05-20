module.exports = class GetByDevController {
  constructor(getGamesUsecase, MakeHttpResponse) {
    this.getGamesUsecase = getGamesUsecase;
    this.MakeHttpResponse = MakeHttpResponse;
  }

  async returnHttpResponse(httpRequest) {
    try {
      const { params } = httpRequest;

      const devGames = await this.getGamesUsecase.getByDev(params.dev);
      console.log(devGames)
      return new this.MakeHttpResponse().make(devGames);
    }catch(e) {
      console.log(e)
      return new this.MakeHttpResponse().makeError(e);
    }
  }
}