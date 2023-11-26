const logger = require("pino")();

// custom pino logger with module name in every log
function createLogger(moduleName) {
  return logger.child({ module: moduleName });
}

exports.createLogger = createLogger;
