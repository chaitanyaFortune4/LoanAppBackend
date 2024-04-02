const yup = require("yup");
// const { isValid, parseISO } = require("date-fns");

// const isValidDate = (dateString) => {
//   return isValid(parseISO(dateString));
// };

// const isValidEmail = (email) => {
//   const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//   return regex.test(email);
// };

// const isValidPanCardNumber = (pancard_no) => {
//   const regex = /^([A-Z]){5}([0-9]){4}([A-Z]){1}$/;
//   return regex.test(pancard_no);
// };

const kycSchema = yup.object({
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  email_id: yup.string().email().required(),
  mobile_no: yup
    .number()
    .positive("Mobile number must be a positive number")
    .integer("Mobile number must be an integer")
    .test(
      "len",
      "Mobile number must be exactly 10 digits",
      (val) => String(val).length === 10
    )
    .required(),
  aadharcard_no: yup
    .number()
    .test(
      "len",
      "Aadhar number must be exactly 12 digits",
      (val) => String(val).length === 12
    )
    .required(),
  pancard_no: yup
    .string()
    .matches(/^([A-Z]){5}([0-9]){4}([A-Z]){1}?$/, "Invalid pancard number")
    .required(),
  dob: yup
    .string()
    .matches(
      /^\d{4}-\d{2}-\d{2}$/,
      "Invalid date format it should be yyyy-mm-dd"
    )
    .required(),
  address: yup.string().required(),
  address2: yup.string(),
  state: yup.string().required(),
  city: yup.string().required(),
  pincode: yup
    .number()
    .positive("Pincode must be a positive number")
    .integer("Pincode must be an integer")
    .test(
      "len",
      "Pincode must be exactly 6 digits",
      (val) => String(val).length === 6
    )
    .required(),
});

const requestOtpSchema = yup.object({
  email_id: yup.string().email().required(),
  mobile_no: yup
    .number()
    .positive("Mobile number must be a positive number")
    .integer("Mobile number must be an integer")
    .test(
      "len",
      "Mobile number must be exactly 10 digits",
      (val) => String(val).length === 10
    )
    .required(),
});

const verifyOtpSchema = yup.object({
  otp: yup
    .number()
    .test(
      "len",
      "OTP must be exactly 6 digits",
      (val) => String(val).length === 6
    )
    .required(),
  mobile_no: yup
    .number()
    .positive("Mobile number must be a positive number")
    .integer("Mobile number must be an integer")
    .test(
      "len",
      "Mobile number must be exactly 10 digits",
      (val) => String(val).length === 10
    )
    .required(),
});

const pancardSchema = yup.object({
  pancard_no: yup
    .string()
    .matches(/^([A-Z]){5}([0-9]){4}([A-Z]){1}?$/, "Invalid pancard number")
    .required(),
  mobile_no: yup
    .number()
    .positive("Mobile number must be a positive number")
    .integer("Mobile number must be an integer")
    .test(
      "len",
      "Mobile number must be exactly 10 digits",
      (val) => String(val).length === 10
    )
    .required(),
  dob: yup
    .string()
    .matches(
      /^\d{4}-\d{2}-\d{2}$/,
      "Invalid date format it should be yyyy-mm-dd"
    )
    .required(),
});

const getUserDetailsSchema = yup.object({
  lead_no: yup.string().required(),
});

module.exports = {
  kycSchema,
  requestOtpSchema,
  verifyOtpSchema,
  pancardSchema,
  getUserDetailsSchema,
};
