module.exports = class BestRatedGamesController {
    constructor(getGamesUsecase) {
      this.getGamesUsecase = getGamesUsecase;
    }
  
    async returnHttpResponse() {
      try {
        const game = await this.getGamesUsecase.bestRatedGames();
        return {
          statusCode: 200,
          body: game,
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
  