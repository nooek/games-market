module.exports = class ChangeUsernameController {
  constructor(changeUsernameUsecase) {
    this.changeUsernameUsecase = changeUsernameUsecase;
  }

  async returnHttpResponse(httpRequest) {
    try {
      const { body } = httpRequest;
      
      const changedUsername = await this.changeUsernameUsecase.change(body)
      return {
        body: changedUsername,
        statusCode: 200
      }
    }catch(e) {
      return {
        statusCode: 400,
        body: {
          error: e.message
        }
      }
    }
  }
}
