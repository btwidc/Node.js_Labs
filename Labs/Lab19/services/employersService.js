const {Employer} = require("../models");

class EmployersService {
    static async getEmployers(){
        return await Employer.findAll();
    }

    static async addEmployer(
        employerName,
        employerSurname,
        employerEmail,
        employerPhone,
        employerExperience,
        employerStreetAddress,
        employerCity,
        employerCountry
    )
    {
        return await Employer.create({
            employerName,
            employerSurname,
            employerEmail,
            employerPhone,
            employerExperience,
            employerStreetAddress,
            employerCity,
            employerCountry
        });
    }

    static async updateEmployer(
        employerName,
        newEmployerName,
        newEmployerSurname,
        newEmployerEmail,
        newEmployerPhone,
        newEmployerExperience,
        newEmployerStreetAddress,
        newEmployerCity,
        newEmployerCountry
    )
    {
        return await Employer.update(
            {
                employerName: newEmployerName,
                employerSurname: newEmployerSurname,
                employerEmail: newEmployerEmail,
                employerPhone: newEmployerPhone,
                employerExperience: newEmployerExperience,
                employerStreetAddress: newEmployerStreetAddress,
                employerCity: newEmployerCity,
                employerCountry: newEmployerCountry
            },
            {
                where: { employerName: employerName },
                returning: true,
                plain: true
            }
        );
    }

    static async deleteEmployer(employerName){
        return await Employer.destroy( { where: { employerName: employerName } });
    }
}

module.exports = EmployersService;
