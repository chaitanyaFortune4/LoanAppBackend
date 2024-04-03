const { encrypt } = require("../utils/common");

const encryptionMiddleWare = async (req, res, next) => {
  console.log("GG");
  try {
    const { pancard_no } = req.body;

    if (pancard_no) {
      const excryptedPan = await encrypt(pancard_no, process.env.SECRET_KEY);
      console.log("EP", excryptedPan);
      req.excryptedPan = excryptedPan;
    }
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = encryptionMiddleWare;
