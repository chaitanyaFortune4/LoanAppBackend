// const connection = require("../config/db_config");

const kycVerification = async (req, res) => {
  try {
    const connection = req.app.get("mysqlConnection");
    console.log("body", req.body);
    connection.query("INSERT INTO kyc_verify SET ?", req.body);

    res.status(201).json({ success: true, message: "Data inserted" });
  } catch (error) {
    console.log("Kyc Error", error);
    res.status(400).json({ success: false, message: "Insertion failed" });
  }
};

module.exports = {
  kycVerification,
};

// await new Promise((resolve, reject) => {
//     db.query("INSERT INTO product_details SET ?", payload, (error, result) => {
//         if (error) {
//             console.error('Error inserting product:', error);
//             reject(error);
//         } else {
//             console.log("Data inserted successfully");
//             resolve(result);
//         }
//     });
// });
