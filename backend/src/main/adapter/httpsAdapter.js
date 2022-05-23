module.exports = class HttpsAdapter {
  constructor(controller) {
    this.controller = controller;
  }

  adapt() {
    return (req, res) => {
      const httpRequest = {
        body: req.body,
        params: req.params,
        req: req
      };
      this.controller.returnHttpResponse(httpRequest)
        .then((httpResponse) => {
          res.status(httpResponse.statusCode).send(httpResponse.body);
        })
        .catch((e) => res.status(500).send({ error: "An error occurred." }))
    };
  }
};
