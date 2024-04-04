const { encrypt, decrypt } = require("../utils/common");

const encryptionMiddleWare = async (req, res, next) => {
  try {
    const { pancard_no, aadharcard_no } = req.body;

    if (pancard_no) {
      //Encryption
      // const encryptedPan = encrypt(pancard_no);
      // console.log("EP", encryptedPan);
      // req.body.pancard_no = encryptedPan;
      // const encryptedAadhar = encrypt(aadharcard_no);
      // console.log("EA", encryptedAadhar);
      // req.body.aadharcard_no = encryptedAadhar;
      //Decryption
      // const decryptedPan = decrypt(pancard_no);
      // console.log("DP", decryptedPan);
      // req.body.pancard_no=decryptedPan
      // const decryptedAadhar = decrypt(aadharcard_no);
      // console.log("DA", decryptedAadhar);
      // req.body.aadharcard_no=decryptedAadhar
    }

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = encryptionMiddleWare;
