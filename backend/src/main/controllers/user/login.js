module.exports = class LoginController {
  constructor(loginUsecase) {
    this.loginUsecase = loginUsecase;
  }

  async returnHttpResponse(httpRequest) {
    try {
      const { body } = httpRequest;

      const logged = await this.loginUsecase.login(body);
      return {
        body: { logged },
        statusCode: 200,
      };
    } catch (e) {
      console.log(e)
      return {
        body: {
          error: e.message,
        },
        statusCode: 400,
      };
    }
  }
};
