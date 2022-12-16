const express = require("express");
/**************************************** */
const qrController = require("../controllers/qr-controllers");
/**************************************** */
const router = express.Router();
/**************************************** */
router.get("/getQr", qrController.getQr);
/**************************************** */
module.exports = router;
/**************************************** */
