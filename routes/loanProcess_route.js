const express = require("express");
const router = express.Router();
const kycController = require("../controllers/kyc_controller");
const otpController = require("../controllers/otp_controller");

router.route("/kyc-details").post(kycController.kycVerification);
router.route("/request-otp").post(otpController.requestOtp);
router.route("/verify-otp").post(otpController.verifyOtp);

module.exports = router;
