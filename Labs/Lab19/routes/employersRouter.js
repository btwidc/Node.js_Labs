const Router = require("express");

const EmployersController = require("../controllers/employersController");

const employersRouter = Router();

employersRouter.get('/list', EmployersController.getEmployers);
employersRouter.post('/add', EmployersController.addEmployer);
employersRouter.put('/update', EmployersController.updateEmployer);
employersRouter.delete('/delete', EmployersController.deleteEmployer);

module.exports = employersRouter;