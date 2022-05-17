module.exports = class ChangeUsernameController {
  constructor(changeUsernameUsecase, makeHttpResponse, makeHttpErrorResponse) {
    this.changeUsernameUsecase = changeUsernameUsecase;
    this.makeHttpResponse = makeHttpResponse;
    this.makeHttpErrorResponse = makeHttpErrorResponse;
  }

  async returnHttpResponse(httpRequest) {
    try {
      const { body } = httpRequest;
      
      return this.makeHttpResponse(await this.changeUsernameUsecase.change(body))
    }catch(e) {
      return this.makeHttpErrorResponse(e)
    }
  }
}
