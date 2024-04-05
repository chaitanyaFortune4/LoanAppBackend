const crypto = require("crypto");

const leadNumberGenerator = () => {
  return (
    "LOAN" +
    Math.floor(100000 + Math.random() * 900000) +
    new Date().getSeconds()
  );
};
const leadUserGenerator = async (connection, body) => {
  const result = await connection.query("INSERT INTO user_details SET ?", body);

  let initial_lead = leadNumberGenerator();
  let initialLeadBody = {
    lead_no: initial_lead,
    lead_status: "Enquiry",
    user_id: result[0].insertId,
  };
  await connection.query("INSERT INTO loan_lead SET ?", initialLeadBody);
};

// Encryption and decryption functions
const encrypt = (text, key = process.env.SECRET_KEY) => {
  const iv = crypto.randomBytes(16); // Generate a random IV (Initialization Vector)
  const cipher = crypto.createCipheriv("aes-128-cbc", key, iv);
  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");
  // Concatenate IV with encrypted data
  const encryptedDataWithIV = iv.toString("hex") + encrypted;
  return encryptedDataWithIV;
};

const decrypt = (encryptedDataWithIV, key = process.env.SECRET_KEY) => {
  console.log(encryptedDataWithIV, key);
  const iv = Buffer.from(encryptedDataWithIV.slice(0, 32), "hex");
  const encryptedData = encryptedDataWithIV.slice(32); // Extract encrypted data
  const decipher = crypto.createDecipheriv("aes-128-cbc", key, iv);
  let decrypted = decipher.update(encryptedData, "hex", "utf8");
  decrypted += decipher.final("utf8");

  return decrypted;
};

module.exports = {
  leadNumberGenerator,
  leadUserGenerator,
  encrypt,
  decrypt,
};
