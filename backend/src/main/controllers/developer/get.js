module.exports = class GetDevController {
  constructor(getDevUsecase) {
    this.getDevUsecase = getDevUsecase;
  }

  async returnHttpResponse(httpRequest) {
    try {
      const { params } = httpRequest;

      console.log(params)

      const dev = await this.getDevUsecase.get(params);

      return {
        body: dev,
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
