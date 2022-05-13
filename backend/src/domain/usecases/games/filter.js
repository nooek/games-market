module.exports = class FilterGamesUsecase {
  constructor(gameDb) {
    this.gameDb = gameDb;
  }

  priceMaker(filter) {
    const defaultMinPrice = 0;
    const defaultMaxPrice = 9999;
    if (filter.minPrice || filter.maxPrice !== 0) {
      return `g.price BETWEEN ${filter.minPrice ? filter.minPrice : defaultMinPrice} AND ${
        filter.maxPrice ? filter.maxPrice : defaultMaxPrice
      }`;
    }
    return `g.price = 0`;
  }

  categoriesMaker(filter) {
    const categoriesQuery = [];
    if (!filter.categories.includes("any")) {
      filter.categories.forEach((category, index) => {
        if (index === filter.categories.length - 1) {
          return categoriesQuery.push(`"%${category}%"`);
        }
        return categoriesQuery.push(`"%${category}%" AND g.category LIKE`);
      });
    } else {
      categoriesQuery.push(`"%"`);
    }
    return categoriesQuery;
  }

  async filter(filter) {
    const price = this.priceMaker(filter);
    const categories = this.categoriesMaker(filter);

    return await this.gameDb.filter({
      price: price,
      categories: categories,
      rating: filter.rating,
    });
  }
};
