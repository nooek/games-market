module.exports = class GetUserRatingController {
  constructor (getUserRatingUsecase, MakeHttpResponse) {
    this.getUserRatingUsecase = getUserRatingUsecase;
    this.MakeHttpResponse = MakeHttpResponse;
  }

  async returnHttpResponse(httpRequest) {
    try {  
      const { params } = httpRequest;
  
      const userRating = await this.getUserRatingUsecase.get(params);

      return new this.MakeHttpResponse().make(userRating)
    } catch (e) {
      console.log(e);
      return new this.MakeHttpResponse().makeError(e)
    }
  }
}