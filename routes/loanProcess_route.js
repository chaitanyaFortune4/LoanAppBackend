const express = require("express");
const router = express.Router();
const kycController = require("../controllers/kyc_controller");

router.route("/kyc").post(kycController.kycVerification);

module.exports = router;
