const { createLogger } = require("./logger/logger");
require("dotenv").config();

// database
require("./config/db");

const logger = createLogger("server");
const port = process.env.PORT || 3000;
const app = require("./app");

//running the server
const server = app.listen(port, () => {
  logger.info(`Server is running --> http://localhost:${port}`);
});

process.on("SIGINT", gracefulShutdown);
process.on("SIGTERM", gracefulShutdown);
process.on("unhandledRejection", gracefulShutdown);

// Shutting down gracefully
function gracefulShutdown() {
  logger.info("Shutting down gracefully...");
  server.close((err) => {
    if (err) {
      logger.error(err, "Error while closing server:");
      process.exit(1);
    } else {
      logger.info("Server closed.");
      process.exit(0);
    }
  });
}
