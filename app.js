const express = require("express");
const cors = require("cors");
const globalErrorHandler = require("./middlewares/globalErrorHandler");

const taskRoutes = require("./routes/task.routes");
const userRoutes = require("./routes/user.routes");

const app = express();

app.use(express.json());
app.use(cors());

// add routes
app.use("/api/tasks", taskRoutes);
app.use("/api/users", userRoutes);

// catch 404 and forward to error handler
app.all("*", function (req, res, next) {
  res.status(404).json({
    error: "API not found",
  });
});

// error handler
app.use(globalErrorHandler);

module.exports = app;
