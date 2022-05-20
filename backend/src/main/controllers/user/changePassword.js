module.exports = class changePasswordController {
  constructor(changePasswordUsecase, MakeHttpResponse) {
    this.changePasswordUsecase = changePasswordUsecase;
    this.MakeHttpResponse = MakeHttpResponse;
  }

  async returnHttpResponse(httpRequest) {
    try {
      const { body } = httpRequest;

      const changedPassword = await this.changePasswordUsecase.change(body);
      return new this.MakeHttpResponse().make(changedPassword)
    } catch (e) {
      return new this.MakeHttpResponse().makeError(e)
    }
  }
};
