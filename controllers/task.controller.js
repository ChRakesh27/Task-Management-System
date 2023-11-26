const { createLogger } = require("../logger/logger");
const Task = require("../model/task.model");

const logger = createLogger("controller:task");

const getAllTasks = async (req, res, next) => {
  try {
    const docs = await Task.find();
    res.json(docs);
  } catch (error) {
    logger.error("failed to get all tasks");
    next(error);
  }
};

const createTask = async (req, res, next) => {
  try {
    logger.info("create new task");
    const obj = req.body;
    const newTask = await Task.create(obj);
    res.status(201).json(newTask);
  } catch (error) {
    logger.error("failed to create task");
    next(error);
  }
};

const getTaskById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const task = await Task.findById(id);
    res.json(task);
  } catch (error) {
    logger.error("failed to get task");
    next(error);
  }
};

const updateTaskById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const obj = req.body;
    const updatedTask = await Task.findByIdAndUpdate(id, obj, { new: true });
    res.json(updatedTask);
  } catch (error) {
    logger.error("failed to update task");
    next(error);
  }
};

const deleteTaskById = async (req, res, next) => {
  try {
    const id = req.params.id;
    await Task.findByIdAndDelete(id);
    res.status(204).json({});
  } catch (error) {
    logger.error("failed to delete task");
    next(error);
  }
};

const getAnalytics = async (req, res, next) => {
  try {
    const { status, startDate, endDate, userId, title } = req.query;

    // { status: status, dueDate: { $gt: preDate, $lt: curDate } }

    const filter = {};
    if (status) {
      filter["status"] = status;
    }

    if (startDate || endDate) {
      filter["dueDate"] = {};
      if (startDate) {
        filter["dueDate"]["$gte"] = startDate;
      }
      if (endDate) {
        filter["dueDate"]["$lte"] = endDate;
      }
    }

    if (userId) {
      filter["userId"] = userId;
    }

    if (title) {
      filter["title"] = {
        $regex: new RegExp(title, "i"),
      };
    }

    const data = await Task.find(filter);
    res.status(200).json(data);
  } catch (error) {
    logger.error(error, "failed to get completed task");
    next(error);
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getTaskById,
  updateTaskById,
  deleteTaskById,
  getAnalytics,
};
