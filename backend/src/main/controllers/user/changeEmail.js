module.exports = class ChangeEmailController {
  constructor(changeEmailUsecase) {
    this.changeEmailUsecase = changeEmailUsecase;
  }

  async returnHttpResponse(httpRequest) {
    try {
      const { body } = httpRequest;

      const changedEmail = await this.changeEmailUsecase.change(body);
      return {
        body: changedEmail,
        statusCode: 200,
      };
    } catch (e) {
      console.log(e)
      return {
        statusCode: 400,
        body: {
          error: e.message,
        },
      };
    }
  }
};
