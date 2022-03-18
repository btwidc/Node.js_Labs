const EmployersService = require("../services/employersService");

class EmployersController {
    static async getEmployers(req, res, next){
        try {
            const employersData = await EmployersService.getEmployers();
            res.json(employersData);
        }
        catch (e){
            res.json("Error");
        }
    }

    static async addEmployer(req, res, next){
        try {
            const {
                employerName,
                employerSurname,
                employerEmail,
                employerPhone,
                employerExperience,
                employerStreetAddress,
                employerCity,
                employerCountry
            } = req.body;
            const employerData = await EmployersService.addEmployer(
                employerName,
                employerSurname,
                employerEmail,
                employerPhone,
                employerExperience,
                employerStreetAddress,
                employerCity,
                employerCountry
            );
            res.json(employerData);
        }
        catch (e){
            res.json("Error");
        }
    }

    static async updateEmployer(req, res, next){
        try {
            const {
                employerName,
                newEmployerName,
                newEmployerSurname,
                newEmployerEmail,
                newEmployerPhone,
                newEmployerExperience,
                newEmployerStreetAddress,
                newEmployerCity,
                newEmployerCountry
            } = req.body;
            const employerData = await EmployersService.updateEmployer(
                employerName,
                newEmployerName,
                newEmployerSurname,
                newEmployerEmail,
                newEmployerPhone,
                newEmployerExperience,
                newEmployerStreetAddress,
                newEmployerCity,
                newEmployerCountry
            );
            res.json(employerData);
        }
        catch (e){
            res.json("Error");
        }
    }

    static async deleteEmployer(req, res, next){
        try {
            const employerName = req.body.employerName;
            const employerData = await EmployersService.deleteEmployer(employerName);
            res.json(employerData);
        }
        catch (e){
            res.json("Error");
        }
    }
}

module.exports = EmployersController;