module.exports = class CheckPlayedController {
  constructor(checkPlayedUsecase) {
    this.checkPlayedUsecase = checkPlayedUsecase;
  }

  async returnHttpResponse(httpRequest) {
    try {
      const { params } = httpRequest
      console.log(params)

      const played = await this.checkPlayedUsecase.check(params);

      return {
        statusCode: 200,
        body: played,
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
