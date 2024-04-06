const { encrypt, decrypt } = require("../utils/common");

const decryptionMiddleWare = async (req, res, next) => {
  try {
    const { Edata } = req.body;

    // console.log("Edata", Edata);

    if (Edata) {
      const decryptedBody = decrypt(Edata);
      req.body = JSON.parse(decryptedBody);
      next();
    } else {
      return res
        .status(400)
        .json({
          success: false,
          message: "Data not encrypted by AES standard",
        });
    }

    // if (pancard_no) {
    // const encryptedBody = encrypt(JSON.stringify(req.body));
    // const decryptedBody = decrypt(encryptedBody);
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
    // }
  } catch (error) {
    next(error);
  }
};

module.exports = decryptionMiddleWare;
