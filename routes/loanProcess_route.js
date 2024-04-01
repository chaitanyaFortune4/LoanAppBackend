const express = require("express");
const router = express.Router();
const validation = require("../middlewares/validation_middleware");
const kycController = require("../controllers/kyc_controller");
const otpController = require("../controllers/otp_controller");
const userDetals = require("../controllers/user_controller");
const creditScore = require("../controllers/creditScore_controller");
const {
  kycSchema,
  requestOtpSchema,
  verifyOtpSchema,
  pancardSchema,
  getUserDetailsSchema,
} = require("../utils/validations");

// router
//   .route("/kyc-details")
//   .post(validation(kycSchema), kycController.kycVerification);
router
  .route("/request-otp")
  .post(validation(requestOtpSchema), otpController.requestOtp);
router
  .route("/verify-otp")
  .post(validation(verifyOtpSchema), otpController.verifyOtp);
router
  .route("/kyc-details")
  .post(validation(kycSchema), userDetals.user_details);

router
  .route("/get-user-details")
  .post(validation(getUserDetailsSchema), userDetals.getUserDetails);
router
  .route("/check-credit-score")
  .post(validation(pancardSchema), creditScore.creditScore);

module.exports = router;
