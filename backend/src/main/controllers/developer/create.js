module.exports = class CreateDevController {
  constructor(createDevUsecase, MakeHttpResponse) {
    this.createDevUsecase = createDevUsecase;
    this.MakeHttpResponse = MakeHttpResponse;
  }

  async returnHttpResponse(httpRequest) {
    try {
      const { body } = httpRequest;

      const dev = await this.createDevUsecase.create(body);

      return new this.MakeHttpResponse().make(dev)
    } catch (e) {
      return new this.MakeHttpResponse().makeError(e)
    }
  }
};
