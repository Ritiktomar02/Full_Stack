

const express = require("express");
const taskController = require("../controllers/taskcontroller");

const router = express.Router();


router.route("/").get(taskController.getAllTasks).post(taskController.createTask);

router.route("/:id").get(taskController.getOneTask);

module.exports = router;