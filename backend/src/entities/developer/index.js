const uniqid = require("uniqid")
const DeveloperEntity = require("./developer")

const developerEntity = new DeveloperEntity(uniqid)

module.exports = developerEntity
