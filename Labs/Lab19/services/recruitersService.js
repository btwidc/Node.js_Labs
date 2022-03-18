const {Recruiter} = require("../models");

class RecruitersService {
    static async getRecruiters(){
        return await Recruiter.findAll();
    }

    static async addRecruiter(
        recruiterName,
        recruiterSurname,
        recruiterEmail,
        recruiterPhone,
        recruiterExperience,
        recruiterPositionId
        )
    {
        return await Recruiter.create({
            recruiterName,
            recruiterSurname,
            recruiterEmail,
            recruiterPhone,
            recruiterExperience,
            recruiterPositionId
        });
    }

    static async updateRecruiter(
        recruiterName,
        newRecruiterName,
        newRecruiterSurname,
        newRecruiterEmail,
        newRecruiterPhone,
        newRecruiterExperience,
        newRecruiterPositionId
    )
    {
        return await Recruiter.update(
            {
                recruiterName: newRecruiterName,
                recruiterSurname: newRecruiterSurname,
                recruiterEmail: newRecruiterEmail,
                recruiterPhone: newRecruiterPhone,
                recruiterExperience: newRecruiterExperience,
                recruiterPositionId: newRecruiterPositionId
            },
            {
                where: { recruiterName: recruiterName },
                returning: true,
                plain: true
            }
        );
    }

    static async deleteRecruiter(recruiterName){
        return await Recruiter.destroy( { where: { recruiterName: recruiterName } });
    }
}

module.exports = RecruitersService;
