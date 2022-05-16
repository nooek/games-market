const uniqid = require("uniqid")
const { MissingParamError } = require("../../utils/errors/index")
const DeveloperEntity = require("./developer")

const developerEntity = new DeveloperEntity(uniqid, MissingParamError)

module.exports = developerEntity
