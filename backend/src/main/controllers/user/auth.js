module.exports = class AuthController {
  constructor(authUsecase) {
    this.authUsecase = authUsecase;
  }

  async returnHttpResponse(httpRequest) {
    try {
      const { userId, authenticated, error } = httpRequest.req;

      console.log(userId, authenticated, error)

      const response = await this.authUsecase.auth({
        userId: userId,
        authenticated: authenticated,
        error: error,
      });

      console.log(response)

      return {
        body: response, 
        statusCode: 200
      }
    } catch (e) {
      console.log(e);
      return {
        body: {
          error: e.message,
        },
        statusCode: 400,
      };
    }
  }
};
