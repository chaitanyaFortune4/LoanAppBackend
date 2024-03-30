const { isValid, parseISO } = require("date-fns");

const isValidDate = (dateString) => {
  return isValid(parseISO(dateString));
};

const isValidEmail = (email) => {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regex.test(email);
};

const isValidPanCardNumber = () => {
  const regex = /^([A-Z]){5}([0-9]){4}([A-Z]){1}$/;
  return regex.test(email);
};

const validateKycRequest = (body, validations) => {
  const errors = validations.reduce((acc, { param, type, required }) => {
    if (required && !body[param]) {
      acc.push(`Missing required parameter: ${param}`);
    } else if (body[param] && typeof body[param] !== type) {
      acc.push(
        `Invalid type for ${param}. Expected ${type}, got ${typeof body[param]}`
      );
    } else if (param === "email_id" && !isValidEmail(body[param])) {
      acc.push(`Invalid format for ${param}.`);
    } else if (param === "dob" && !isValidDate(body[param])) {
      acc.push(`Invalid format for ${param}. Expected YYYY-MM-DD format.`);
    } else if (
      param === "aadharcard_no" &&
      body[param].toString().length !== 12
    ) {
      acc.push(`Invalid ${param}. It should be 12 digits.`);
    } else if (param === "pancard_no" && !isValidPanCardNumber(body[param])) {
      acc.push(`Invalid ${param}`);
    } else if (param === "mobile_no" && body[param].toString().length !== 10) {
      acc.push(`Invalid ${param}. It should be 10 digits.`);
    }
    return acc;
  }, []);
  return errors;
};

const validateRequestOtp = (body, validations) => {
  const errors = validations.reduce((acc, { param, type, required }) => {
    if (required && !body[param]) {
      acc.push(`Missing required parameter: ${param}`);
    } else if (body[param] && typeof body[param] !== type) {
      acc.push(
        `Invalid type for ${param}. Expected ${type}, got ${typeof body[param]}`
      );
    } else if (param === "email_id" && !isValidEmail(body[param])) {
      acc.push(`Invalid format for ${param}.`);
    } else if (param === "mobile_no" && body[param].toString().length !== 10) {
      acc.push(`Invalid ${param}. It should be 10 digits.`);
    }
    return acc;
  }, []);
  return errors;
};

const validateVerifyOtp = (body, validations) => {
  const errors = validations.reduce((acc, { param, type, required }) => {
    if (required && !body[param]) {
      acc.push(`Missing required parameter: ${param}`);
    } else if (body[param] && typeof body[param] !== type) {
      acc.push(
        `Invalid type for ${param}. Expected ${type}, got ${typeof body[param]}`
      );
    } else if (param === "otp" && body[param].toString().length !== 10) {
      acc.push(`Invalid ${param}. It should be 6 digits.`);
    } else if (param === "mobile_no" && body[param].toString().length !== 10) {
      acc.push(`Invalid ${param}. It should be 10 digits.`);
    }
    return acc;
  }, []);
  return errors;
};

module.exports = {
  isValidDate,
  validateKycRequest,
  validateRequestOtp,
  validateVerifyOtp,
};
