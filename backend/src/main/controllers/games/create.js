module.exports = class CreateGameController {
  constructor(createGameUsecase, MakeHttpResponse) {
    this.createGameUsecase = createGameUsecase;
    this.MakeHttpResponse = MakeHttpResponse;
  }

  async returnHttpResponse(httpRequest) {
    try {
      const { body } = httpRequest;

      const created = await this.createGameUsecase.create(body);

      return new this.MakeHttpResponse().make(created)
    } catch (e) {
      console.log(e)
      return new this.MakeHttpResponse().makeError(e)
    }
  }
};
