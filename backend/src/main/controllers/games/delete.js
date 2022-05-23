module.exports = class DeleteController {
  constructor(deleteUsecase, MakeHttpResponse) {
    this.deleteUsecase = deleteUsecase;
    this.MakeHttpResponse = MakeHttpResponse;
  }

  async returnHttpResponse(httpRequest) {
    try {
      const { body } = httpRequest
      
      const deletedGame = await this.deleteUsecase.delete(body)
      return new this.MakeHttpResponse().make(deletedGame)
    }catch(e) {
        console.log(e)
      return new this.MakeHttpResponse().makeError(e);
    }
  }
}
