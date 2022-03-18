const Router = require("express");

const positionsRouter = require("./positionsRouter");
const employersRouter = require("./employersRouter");
const recruitersRoutes = require("./recruitersRouter");

const staffRouter = Router();

staffRouter.use('/positions', positionsRouter);
staffRouter.use('/employers', employersRouter);
staffRouter.use('/recruiters', recruitersRoutes);

module.exports = staffRouter;
