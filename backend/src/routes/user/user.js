const express = require("express");
const controller = require("../../controllers/userController/userController");
const router = express.Router();

router.get('/', controller.createUser);

module.exports = router;
