module.exports = class PlayGameController {
  constructor(playGameUsecase, MakeHttpResponse) {
    this.playGameUsecase = playGameUsecase;
    this.MakeHttpResponse = MakeHttpResponse;
  }

  async returnHttpResponse(httpRequest) {
    try {
      const { body } = httpRequest

      const played = await this.playGameUsecase.play(body)

      return new this.MakeHttpResponse().make(played)
    } catch(e) {
      console.log(e)
      return new this.MakeHttpResponse().makeError(e)
    }
  }
}
