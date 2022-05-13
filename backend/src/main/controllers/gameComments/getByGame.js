module.exports = class GetCommentsByGameController {
  constructor(getCommentsByGameUsecase) {
    this.getCommentsByGameUsecase = getCommentsByGameUsecase;
  }

  async returnHttpResponse(httpRequest) {
    try {
      const { params } = httpRequest;

      const comment = await this.getCommentsByGameUsecase.get(params);

      return {
        body: comment,
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
