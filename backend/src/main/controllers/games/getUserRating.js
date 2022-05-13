module.exports = class GetUserRatingController {
  constructor (getUserRatingUsecase) {
    this.getUserRatingUsecase = getUserRatingUsecase
  }

  async returnHttpResponse(httpRequest) {
    try {  
      const { params } = httpRequest;
  
      const userRating = await this.getUserRatingUsecase.get(params);

      return {
        statusCode: 200,
        body: userRating,
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
}