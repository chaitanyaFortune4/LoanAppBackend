const express = require("express");
const router = express.Router();
const validation = require("../middlewares/validation_middleware");
const kycController = require("../controllers/kyc_controller");
const otpController = require("../controllers/otp_controller");
const { kycSchema, requestOtpSchema } = require("../utils/validations");

router
  .route("/kyc-details")
  .post(validation(kycSchema), kycController.kycVerification);
router
  .route("/request-otp")
  .post(validation(requestOtpSchema), otpController.requestOtp);
router.route("/verify-otp").post(otpController.verifyOtp);

module.exports = router;
