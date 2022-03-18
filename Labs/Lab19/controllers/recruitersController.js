const RecruitersService = require("../services/recruitersService");

class RecruitersController {
    static async getRecruiters(req, res, next){
        try {
            const recruitersData = await RecruitersService.getRecruiters();
            res.json(recruitersData);
        }
        catch (e){
            res.json("Error");
        }
    }

    static async addRecruiter(req, res, next){
        try {
            const {
                recruiterName,
                recruiterSurname,
                recruiterEmail,
                recruiterPhone,
                recruiterExperience,
                recruiterPositionId
            } = req.body;
            const recruiterData = await RecruitersService.addRecruiter(
                recruiterName,
                recruiterSurname,
                recruiterEmail,
                recruiterPhone,
                recruiterExperience,
                recruiterPositionId
            );
            res.json(recruiterData);
        }
        catch (e){
            res.json("Error");
        }
    }

    static async updateRecruiter(req, res, next){
        try {
            const {
                recruiterName,
                newRecruiterName,
                newRecruiterSurname,
                newRecruiterEmail,
                newRecruiterPhone,
                newRecruiterExperience,
                newRecruiterPositionId
            } = req.body;
            const recruiterData = await RecruitersService.updateRecruiter(
                recruiterName,
                newRecruiterName,
                newRecruiterSurname,
                newRecruiterEmail,
                newRecruiterPhone,
                newRecruiterExperience,
                newRecruiterPositionId
            );
            res.json(recruiterData);
        }
        catch (e){
            res.json("Error");
        }
    }

    static async deleteRecruiter(req, res, next){
        try {
            const recruiterName = req.body.recruiterName;
            const recruiterData = await RecruitersService.deleteRecruiter(recruiterName);
            res.json(recruiterData);
        }
        catch (e){
            res.json("Error");
        }
    }
}

module.exports = RecruitersController;