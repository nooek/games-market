module.exports = class RateGameController {
  constructor(rateGameUsecase, MakeHttpResponse) {
    this.rateGameUsecase = rateGameUsecase;
    this.MakeHttpResponse = MakeHttpResponse;
  }

  async returnHttpResponse(httpRequest) {
    try {
      const { body } = httpRequest;

      const rated = await this.rateGameUsecase.rate(body);

      return new this.MakeHttpResponse().make(rated)
    } catch (e) {
      console.log(e);
      return new this.MakeHttpResponse().makeError(e)
    }
  }
};
