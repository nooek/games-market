module.exports = class PlayGameController {
  constructor(playGameUsecase) {
    this.playGameUsecase = playGameUsecase;
  }

  async returnHttpResponse(httpRequest) {
    try {
      const { body } = httpRequest

      const played = await this.playGameUsecase.play(body)

      return {
        statusCode: 200,
        body: { played },
      }
    } catch(e) {
      console.log(e)
      return {
        statusCode: 400,
        body: {
          error: e.message,
        },
      }
    }
  }
}
