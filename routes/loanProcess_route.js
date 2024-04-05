const express = require("express");
const router = express.Router();
const validation = require("../middlewares/validation_middleware");
const stateCityController = require("../controllers/state_city_controller");
const kycController = require("../controllers/kyc_controller");
const otpController = require("../controllers/otp_controller");
const userDetals = require("../controllers/user_controller");
const creditScore = require("../controllers/creditScore_controller");
const bankData = require("../controllers/loan_offers_controller");
const repaymentSchedule = require("../controllers/loan_repayment_controller");
const decryptionMiddleWare = require("../middlewares/decryption_middleware");
const {
  kycSchema,
  requestOtpSchema,
  verifyOtpSchema,
  pancardSchema,
  getUserDetailsSchema,
  getLoanEligibleSchema,
  repaymentScheduleSchema,
} = require("../utils/validations");
const encryptionMiddleWare = require("../middlewares/encryption_middleware");

// router
//   .route("/kyc-details")
//   .post(validation(kycSchema), kycController.kycVerification);
router.route("/state-city").post(stateCityController.getStateCity);
router
  .route("/request-otp")
  .post(validation(requestOtpSchema), otpController.requestOtp);
router
  .route("/verify-otp")
  .post(validation(verifyOtpSchema), otpController.verifyOtp);
router
  .route("/kyc-details")
  .post(
    decryptionMiddleWare,
    validation(kycSchema),
    encryptionMiddleWare,
    userDetals.user_details
  );

router
  .route("/get-user-details")
  .post(validation(getUserDetailsSchema), userDetals.getUserDetails);
router
  .route("/credit-score")
  .post(validation(pancardSchema), creditScore.creditScore);
router
  .route("/loan-eligible")
  .post(validation(getLoanEligibleSchema), bankData.bank_details);

router
  .route("/loan-repayment-schedule")
  .post(
    validation(repaymentScheduleSchema),
    repaymentSchedule.loan_repayment_details
  );

module.exports = router;
