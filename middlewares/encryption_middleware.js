const { encrypt, decrypt } = require("../utils/common");

const encryptionMiddleWare = async (req, res, next) => {
  try {
    // const originalJson = res.json;
    // res.json = function (data) {
    //   // Encrypt the response data before sending
    //   const jsonData = JSON.stringify(data);
    //   const encryptedData = encrypt(jsonData);
    //   // Set appropriate headers for encryption
    //   res.setHeader("Content-Type", "application/json"); // Assuming JSON response
    //   // Send the encrypted data
    //   originalJson.call(this, encryptedData);
    // };
    // next();

    const originalJson = res.json;
    res.json = function (data) {
      if (data && data.data) {
        // Check if 'data' property exists
        const encryptedData = encrypt(JSON.stringify(data.data));
        data.data = encryptedData;
      }
      originalJson.call(this, data);
    };
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = encryptionMiddleWare;
