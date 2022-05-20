module.exports = class ChangeEmailController {
  constructor(changeEmailUsecase, MakeHttpResponse) {
    this.changeEmailUsecase = changeEmailUsecase;
    this.MakeHttpResponse = MakeHttpResponse;
  }

  async returnHttpResponse(httpRequest) {
    try {
      const { body } = httpRequest;

      const changedEmail = await this.changeEmailUsecase.change(body);
      return new this.MakeHttpResponse().make(changedEmail)
    } catch(e) {
      return new this.MakeHttpResponse().makeError(e)
    }
  }
};
