const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema(
  {
    _id: { type: mongoose.Types.ObjectId, auto: true },
    title: {
      type: String,
      required: [true, "Title is required field!"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Description is required field!"],
      trim: true,
    },
    userId: {
      type: String,
      required: [true, "UserId is required field!"],
      trim: true,
    },
    dueDate: {
      type: Date,
      required: [true, "DueDate is required field!"],
    },
    status: {
      type: String,
      required: [true, "Status is required field!"],
      enum: {
        values: ["Open", "Pending", "OnHold", "Completed"],
        message: "Invalid Status",
      },
    },
  },
  {
    versionKey: false,
  },
);

const task = mongoose.model("tasks", taskSchema);
module.exports = task;
