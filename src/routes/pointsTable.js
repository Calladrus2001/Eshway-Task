const express = require("express");
const pointsTableController = require("../controllers/pointsTableController");

const pointsTableRouter = express.Router();

pointsTableRouter.get("/", pointsTableController.getPointsTable);
pointsTableRouter.put("/:teamId", pointsTableController.updatePoints);
pointsTableRouter.post("/", pointsTableController.addTeam);

module.exports = pointsTableRouter;