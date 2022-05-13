module.exports = class CreateGameCommentController {
  constructor(createGameUsecase) {
    this.createGameUsecase = createGameUsecase;
  }

  async returnHttpResponse(httpRequest) {
    try {
      const { body } = httpRequest;

      const dev = await this.createGameUsecase.create(body);

      return {
        body: dev,
        statusCode: 200,
      };
    } catch (e) {
      console.log(e);
      return {
        statusCode: 400,
        body: {
          error: e.message,
        },
      };
    }
  }
};
