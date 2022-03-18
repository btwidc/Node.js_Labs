const Router = require("express");

const RecruitersController = require("../controllers/recruitersController");

const recruitersRouter = Router();

recruitersRouter.get('/list', RecruitersController.getRecruiters);
recruitersRouter.post('/add', RecruitersController.addRecruiter);
recruitersRouter.put('/update', RecruitersController.updateRecruiter);
recruitersRouter.delete('/delete', RecruitersController.deleteRecruiter);

module.exports =  recruitersRouter;