module.exports = class LoginController {
  constructor(loginUsecase, MakeHttpResponse) {
    this.loginUsecase = loginUsecase;
    this.MakeHttpResponse = MakeHttpResponse;
  }

  async returnHttpResponse(httpRequest) {
    try {
      const { body } = httpRequest;

      const logged = await this.loginUsecase.login(body);
      return new this.MakeHttpResponse().make(logged)
    } catch (e) {
      return new this.MakeHttpResponse().makeError(e)
    }
  }
};
