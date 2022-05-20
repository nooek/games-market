module.exports = class CheckPlayedController {
  constructor(checkPlayedUsecase, MakeHttpResponse) {
    this.checkPlayedUsecase = checkPlayedUsecase;
    this.MakeHttpResponse = MakeHttpResponse;
  }

  async returnHttpResponse(httpRequest) {
    try {
      const { params } = httpRequest

      const played = await this.checkPlayedUsecase.check(params);

      return new this.MakeHttpResponse().make(played)
    } catch (e) {
      console.log(e)
      return new this.MakeHttpResponse().makeError(e)
    }
  }
};
