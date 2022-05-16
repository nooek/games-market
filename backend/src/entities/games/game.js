module.exports = class GameEntity {
  constructor(validCategories, idGen, InvalidParamError, MissingParamError) {
    this.validCategories = validCategories;
    this.idGen = idGen;
    this.InvalidParamError = InvalidParamError;
    this.MissingParamError = MissingParamError;
  }

  getInvalidCategories(categories) {
    const invalidCategories = []
    categories.forEach((each) => {
      if (!this.validCategories.includes(each)) return invalidCategories.push(each)
    })
    return invalidCategories
  }

  validate(data) {
    if (!data.name) {
      throw new this.MissingParamError("Username", "Please provide the game name")
    }
    if (data.name.length > 32 || data.name.length < 3) {
      throw new this.InvalidParamError("Username", "The name must have less than 32 characters and longer than 3 characters")
    }
    if (!data.desc) {
      throw new this.MissingParamError("Description", "Please provide the game description")
    }
    if (data.desc.length > 200) {
      throw new this.InvalidParamError("Description", "The description must have less than 200 characters")
    }
    if (!data.devId) {
      throw new this.MissingParamError("DevId", "An error occurred, try again later")
    }
    if (!data.thumbnail) throw new this.MissingParamError("Thumbnail", "Please provide the game thumbnail")
    if (!data.game) throw new this.MissingParamError("Game", "Please provide the game")
    if (!data.price) throw new this.MissingParamError("Price", "Please provide the game price")
    if (!data.owner) throw new Error("The owner is required.")

    if (!data.categories) throw new this.MissingParamError("Category(ies)", "Please provide the game category(ies)")
    const invalidCategories = this.getInvalidCategories(data.categories)
    if (invalidCategories.length > 0) {
      throw new this.InvalidParamError("Category(ies)", `The category(ies) is(are) invalid: ${invalidCategories.join(", ")}`)
    }
  
    return { 
      getId: () => this.idGen(),
      getDevGamesId: () => this.idGen(),
      getDevId: () => data.devId,
      getName: () => data.name,
      getDescription: () => data.desc,
      getThumbnail: () => data.thumbnail,
      getGame: () => data.game,
      getPrice: () => data.price,
      getOwner: () => data.owner,
      getCategories: () => data.categories
    }
  }
}
