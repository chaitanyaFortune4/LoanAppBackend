// Import required modules
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db_config");
const dotenv = require("dotenv");
dotenv.config();

// Create an instance of Express
const app = express();

// Set the port
const PORT = process.env.PORT || 5000;

// Middleware setup
app.use(express.json());
app.use(cors({ origin: true }));

// Import routes
const healthCheckRouter = require("./routes/healthcheck_route");
const loanProcessRouter = require('./routes/loanProcess_route')

// Route setup
app.use("/api/v1", loanProcessRouter);

// Welcome & healthCheck route
app.use("/", healthCheckRouter);


// Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on port: ${PORT}`);
// });
connectDB().then((connection) => {
  app.set("mysqlConnection", connection);
  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
});
