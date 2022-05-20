module.exports = class MakeHttpResponse {
  makeError(error) {
    return {
      statusCode: error.statusCode,
      body: {
        error: error.messageToClient,
      },
    };
  }

  make(data) {
    return {
      body: data,
      statusCode: 200,
    };
  }
}
