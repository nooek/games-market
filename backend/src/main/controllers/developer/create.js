module.exports = class CreateDevController {
  constructor(createDevUsecase) {
    this.createDevUsecase = createDevUsecase;
  }

  async returnHttpResponse(httpRequest) {
    try {
      const { body } = httpRequest;

      const dev = await this.createDevUsecase.create(body);

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
