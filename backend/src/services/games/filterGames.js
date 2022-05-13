const makeErrorResponse = require("../../utils/makeErrorResponse")

module.exports = class FilterGamesValidator {
  constructor(filters) {
    this.filters = filters
  }

  priceRange() {
    if (this.filters.maxPrice && this.filters.minPrice) {
      return { valid: true }
    }
    return makeErrorResponse('minPrice or maxPrice are missing')
  }
  
  categories() {
    if (this.filters.categories) {
      return { valid: true }
    }
    return { valid: true }
    // return makeErrorResponse('the category(ies) is(are) missing')
  }

  rating() {
    if (this.filters.rating) return { valid: true }
    return { valid: true }
    // return makeErrorResponse('rating is missing')
  }

  get responses() {
    return [
      this.priceRange(),
      this.rating(),
      this.categories()
    ]
  }
}
