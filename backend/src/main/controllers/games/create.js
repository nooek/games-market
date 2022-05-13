module.exports = class CreateGameController {
  constructor(createGameUsecase) {
    this.createGameUsecase = createGameUsecase;
  }

  async returnHttpResponse(httpRequest) {
    try {
      const { body } = httpRequest;

      const created = await this.createGameUsecase.create(body);

      return {
        statusCode: 200,
        body: { created },
      };
    } catch (e) {
      console.log(e)
      return {
        statusCode: 400,
        body: {
          error: e.message,
        },
      };
    }
  }
};
