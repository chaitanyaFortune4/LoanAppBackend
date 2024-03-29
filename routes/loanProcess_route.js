const express = require("express");
const router = express.Router();
const kycController = require("../controllers/kyc_controller");
const otpController = require("../controllers/otp_controller");

router.route("/kyc").post(kycController.kycVerification);
router.route("/requestOtp").post(otpController.requestOtp);
router.route("/verifyOtp").post(otpController.verifyOtp);

module.exports = router;
