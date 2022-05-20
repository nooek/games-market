module.exports = class GetDevController {
  constructor(getDevUsecase, MakeHttpResponse) {
    this.getDevUsecase = getDevUsecase;
    this.MakeHttpResponse = MakeHttpResponse;
  }

  async returnHttpResponse(httpRequest) {
    try {
      const { params } = httpRequest;
      const dev = await this.getDevUsecase.get(params);

      return new this.MakeHttpResponse().make(dev)
    } catch (e) {
      return new this.MakeHttpResponse().makeError(e)
    }
  }
};
