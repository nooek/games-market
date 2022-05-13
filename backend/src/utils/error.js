module.exports = class Errors {
  constructor(responses) {
    this.responses = responses;
  }

  get errors() {
    const errors = [];
    if (this.responses.length > 0) {
      this.responses.forEach((response) => {
        if (!response.valid) {
          errors.push(response);
        }
      });
    } else {
      return errors.push({
        valid: false,
        message: "Something went wrong, try again later",
      });
    }

    if (errors.length > 0) { return errors[0] }
    return { valid: true }
  }
};
