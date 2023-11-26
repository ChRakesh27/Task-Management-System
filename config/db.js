const mongoose = require("mongoose");
const { createLogger } = require("../logger/logger");

const logger = createLogger("config:db");
const mongoDB_Url = process.env.MongoDB_Url;

//connect the mongoose
mongoose.connect(mongoDB_Url);
mongoose.connection.on("connected", () => {
  logger.info("mongoDB connected");
});
mongoose.connection.on("error", (err) => {
  console.log("====================================");
  logger.error(err);
  console.log("====================================");
});
