module.exports = class GetCommentsByGameController {
  constructor(getCommentsByGameUsecase, MakeHttpResponse) {
    this.getCommentsByGameUsecase = getCommentsByGameUsecase;
    this.MakeHttpResponse = MakeHttpResponse;
  }

  async returnHttpResponse(httpRequest) {
    try {
      const { params } = httpRequest;

      const comment = await this.getCommentsByGameUsecase.get(params);

      return new this.MakeHttpResponse().make(comment)
    } catch (e) {
      return new this.MakeHttpResponse().makeError(e)
    }
  }
};
