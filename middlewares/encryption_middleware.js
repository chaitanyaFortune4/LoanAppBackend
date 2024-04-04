const { encrypt, decrypt } = require("../utils/common");

const encryptionMiddleWare = async (req, res, next) => {
  try {
    const { pancard_no } = req.body;
    if (pancard_no) {
      const excryptedPan = await encrypt(pancard_no, process.env.SECRET_KEY);
      req.excryptedPan = excryptedPan;
    }
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = encryptionMiddleWare;
