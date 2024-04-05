const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const healthCheck = {
    success: true,
    message: "Loan Application server is running OK",
    uptime: process.uptime(),
    responseTime: process.hrtime(),
    timeStamp: Date.now(),
  };
  try {
    res.status(200).json(healthCheck);
  } catch (error) {
    healthCheck.message = error;
    res.status(503).json(healthCheck);
  }
});

module.exports = router;
