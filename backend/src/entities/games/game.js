module.exports = class GameEntity {
  constructor(validCategories, idGen) {
    this.validCategories = validCategories
    this.idGen = idGen
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
      throw new Error('Name is required.')
    }
    if (data.name.length > 32 || data.name.length < 3) {
      throw new Error("The name must have from 3 to 32 characters")
    }
    if (!data.desc) {
      throw new Error("The game description is required.")
    }
    if (data.desc.length > 200) {
      throw new Error("The description must have less than 200 characters")
    }
    if (!data.devId) {
      throw new Error("DevId is required")
    }
    if (!data.thumbnail) throw new Error("The game thumbnail is required")
    if (!data.game) throw new Error("The game is required.")
    if (!data.price) throw new Error("The price is required.")
    if (!data.owner) throw new Error("The owner is required.")

    if (!data.categories) throw new Error("The categories is required.")
    const invalidCategories = this.getInvalidCategories(data.categories)
    if (invalidCategories.length > 0) {
      throw new Error(`The category(ies) is(are) invalid: ${invalidCategories.join(", ")}`, "400")
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
