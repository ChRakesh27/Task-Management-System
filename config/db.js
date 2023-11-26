const mongoose = require("mongoose");
const { createLogger } = require("../logger/logger");

const logger = createLogger("config:db");
const MONGODB_URL = process.env.MONGODB_URL;

//connect the mongoose
mongoose.connect(MONGODB_URL);
mongoose.connection.on("connected", () => {
  logger.info("mongoDB connected");
});
mongoose.connection.on("error", (err) => {
  console.log("====================================");
  logger.error(err);
  console.log("====================================");
});
