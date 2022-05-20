module.exports = class CreateGameCommentController {
  constructor(createGameUsecase, MakeHttpResponse) {
    this.createGameUsecase = createGameUsecase;
    this.MakeHttpResponse = MakeHttpResponse;
  }

  async returnHttpResponse(httpRequest) {
    try {
      const { body } = httpRequest;

      const dev = await this.createGameUsecase.create(body);

      return new this.MakeHttpResponse().make(dev)
    } catch (e) {
      return new this.MakeHttpResponse().makeError(e)
    }
  }
};
