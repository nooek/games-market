module.exports = class ChangeUsernameController {
  constructor(changeUsernameUsecase, MakeHttpResponse) {
    this.changeUsernameUsecase = changeUsernameUsecase;
    this.MakeHttpResponse = MakeHttpResponse;
  }

  async returnHttpResponse(httpRequest) {
    try {
      const { body } = httpRequest;

      const changedUsername = await this.changeUsernameUsecase.change(body)
      return new this.MakeHttpResponse().make(changedUsername)
    }catch(e) {
      return new this.MakeHttpResponse().makeError(e)
    }
  }
}
