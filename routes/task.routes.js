const taskController = require("../controllers/task.controller");

const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

router
  .route("")
  .get(taskController.getAllTasks)
  .post(authMiddleware, taskController.createTask);

router.route("/analytics").get(taskController.getAnalytics);

router
  .route("/:id")
  .get(taskController.getTaskById)
  .put(authMiddleware, taskController.updateTaskById)
  .delete(authMiddleware, taskController.deleteTaskById);

module.exports = router;
