module.exports = makeHttpResponse = (data) => {
  return {
    body: data,
    statusCode: 200,
  };
};
