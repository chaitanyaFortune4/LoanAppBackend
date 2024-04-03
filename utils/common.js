const crypto = require("crypto");

const leadNumberGenerator = () => {
  return "LOAN" + Math.floor(100000 + Math.random() * 900000);
};

const leadUserGenerator = async (connection, body) => {
  const result = await connection.query("INSERT INTO user_details SET ?", body);

  let initia_lead = leadNumberGenerator();
  let initialLeadBody = {
    lead_no: initia_lead,
    lead_status: "Enquiry",
    user_id: result[0].insertId,
  };
  await connection.query("INSERT INTO loan_lead SET ?", initialLeadBody);
};

// Encryption and decryption functions
const encrypt = (text, key) => {
  const iv = crypto.randomBytes(16); // Generate a random IV (Initialization Vector)
  const cipher = crypto.createCipheriv("aes-128-cbc", key, iv);
  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");
  return { iv: iv.toString("hex"), encryptedData: encrypted };
};

const decrypt = (encryptedData, key) => {
  const decipher = crypto.createDecipheriv(
    "aes-128-cbc",
    key,
    Buffer.from(iv, "hex")
  );
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
