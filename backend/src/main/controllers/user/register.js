module.exports = class RegisterController {
  constructor(registerUsecase) {
    this.registerUsecase = registerUsecase;
  }

  async returnHttpResponse(httpRequest) {
    try {
      const { body } = httpRequest;

      const registered = await this.registerUsecase.register(body.userData);
      return {
        statusCode: 200,
        body: { registered },
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
