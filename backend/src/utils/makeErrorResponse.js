module.exports = (message, statusCode) => {
  return {
    valid: false,
    message: message || "An error happened",
    statusCode: statusCode || 400
  }
}
