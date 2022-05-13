module.exports = class RateGameController {
  constructor(rateGameUsecase) {
    this.rateGameUsecase = rateGameUsecase;
  }

  async returnHttpResponse(httpRequest) {
    try {
      const { body } = httpRequest;

      const rated = await this.rateGameUsecase.rate(body);
      console.log(rated)

      return {
        statusCode: 200,
        body: { rated },
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
