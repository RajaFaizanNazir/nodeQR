const express = require("express");
/**************************************** */
const qrController = require("../controllers/qr-controllers");
/**************************************** */
const router = express.Router();
/**************************************** */
router.get("/users", qrController.getQr);
/**************************************** */
module.exports = router;
/**************************************** */
