const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    taskTitle: {
        type: String,
        require: [true, "Task title is required"]
    },
    taskDesc: {
        type: String,
        require: [true, "Task description is required"]
    }
});

module.exports = mongoose.model("Task", taskSchema);