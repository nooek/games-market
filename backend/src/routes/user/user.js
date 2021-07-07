const express = require("express");
const controller = require("../../controllers/userController/userController");
const router = express.Router();

router.get('/', controller.getUser);
router.post('/', controller.createUser);

module.exports = router;
