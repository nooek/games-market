module.exports = class GetByIdController {
  constructor(getGamesUsecase) {
    this.getGamesUsecase = getGamesUsecase;
  }

  async returnHttpResponse(httpRequest) {
    try {
      const { params } = httpRequest;

      const game = await this.getGamesUsecase.getById(params.id);
      return {
        statusCode: 200,
        body: game,
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
