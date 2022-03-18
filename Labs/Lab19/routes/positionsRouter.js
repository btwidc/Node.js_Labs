const Router = require("express");

const PositionsController = require("../controllers/positionsController");

const positionsRouter = Router();

positionsRouter.get('/list', PositionsController.getPositions);
positionsRouter.post('/add', PositionsController.addPosition);
positionsRouter.put('/update', PositionsController.updatePosition);
positionsRouter.delete('/delete', PositionsController.deletePosition);

module.exports = positionsRouter;