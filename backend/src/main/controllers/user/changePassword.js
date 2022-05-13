module.exports = class ChangeEmailController {
  constructor(changePasswordUsecase) {
    this.changePasswordUsecase = changePasswordUsecase;
  }

  async returnHttpResponse(httpRequest) {
    try {
      const { body } = httpRequest;

      const changedPassword = await this.changePasswordUsecase.change(body);
      return {
        body: changedPassword,
        statusCode: 200,
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
