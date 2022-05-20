module.exports = class RegisterController {
  constructor(registerUsecase, MakeHttpResponse) {
    this.registerUsecase = registerUsecase;
    this.MakeHttpResponse = MakeHttpResponse
  }

  async returnHttpResponse(httpRequest) {
    try {
      const { body } = httpRequest;

      const registered = await this.registerUsecase.register(body.userData);
      return new this.MakeHttpResponse().make(registered)
    } catch (e) {
      console.log(e);
      return new this.MakeHttpResponse().makeError(e)
    }
  }
};
