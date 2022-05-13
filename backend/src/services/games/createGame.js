const makeErrorResponse = require("../../utils/makeErrorResponse");

module.exports = class VerifyCreateGameCredentials {
  constructor(gameInfo) {
    this.gameInfo = gameInfo;
  }

  name() {
    if (this.gameInfo.name) {
      if (this.gameInfo.name.length > 32 || this.gameInfo.name.length < 3) {
        return makeErrorResponse("The name must have from 3 to 32 characters", "400");
      }
      return { valid: true };
    }
    return makeErrorResponse("Please provide a name", "400");
  }

  desc() {
    if (this.gameInfo.desc) {
      if (this.gameInfo.desc.length > 200) {
        return makeErrorResponse("The description must have less than 200 characters", "400");
      }
      return { valid: true };
    }
    return makeErrorResponse("Please provide a description", "400");
  }

  devId() {
    if (this.gameInfo.devId) {
      return { valid: true }
    }
    return makeErrorResponse("Please provide the devId", "400")
  }

  thumbnail() {
    if (this.gameInfo.thumbnail) return { valid: true }
    return makeErrorResponse("Please provide the game thumbnail", "400")
  }

  game() {
    if (this.gameInfo.game) return { valid: true }
    return makeErrorResponse("Please provide the game", "400")
  }

  price() {
    if (this.gameInfo.price) return { valid: true }
    return makeErrorResponse("Please provide the price", "400")
  }

  owner() {
    if (this.gameInfo.owner) return { valid: true }
    return makeErrorResponse("Please provide the owner", "400")
  }
  
  get listOfInvalidCategories() {
    const validCategories = [
      "action",
      "adventure",
      "horror",
      "shooter",
      "top-down",
      "metroid-vania",
      "anime",
      "cartoon",
      "puzzle",
      "sports",
      "nsfw",
      "strategy",
      "simulation",
      "music",
      "fantasy",
      "platform",
      "rhythm",
      "rpg",
      "casual",
      "trivia",
      "battle-royale"
    ]
    return validCategories
  }

  getInvalidCategories() {
    const validCategories = this.listOfInvalidCategories
    const invalidCategories = []
    this.gameInfo.categories.forEach((each) => {
      if (!validCategories.includes(each)) return invalidCategories.push(each)
    })
    return invalidCategories
  }

  category() {
    if (!this.gameInfo.categories) return makeErrorResponse("Please provide the game category")
    
    const invalidCategories = this.getInvalidCategories()
    if (invalidCategories.length > 0) {
      return makeErrorResponse(`The category(ies) is(are) invalid: ${invalidCategories.join(", ")}`, "400")
    }
    return { valid: true }
  }
};
