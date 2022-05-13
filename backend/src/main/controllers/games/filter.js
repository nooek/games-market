module.exports = class FilterGamesController {
  constructor(filterGamesUsecase) {
    this.filterGamesUsecase = filterGamesUsecase;
  }

  async returnHttpResponse(httpRequest) {
    try {
      const { body } = httpRequest;

      const filteredGames = await this.filterGamesUsecase.filter(body);

      return {
        statusCode: 200,
        body: filteredGames,
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
