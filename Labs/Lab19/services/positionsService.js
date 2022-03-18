const {Position} = require("../models");

class PositionsService {
    static async getPositions(){
        return await Position.findAll();
    }

    static async addPosition(
        positionName,
        positionSalary,
        positionHoursPerWeek
    )
    {
        return await Position.create({
            positionName,
            positionSalary,
            positionHoursPerWeek
        });
    }

    static async updatePosition(
        positionName,
        newPositionName,
        newPositionSalary,
        newPositionHoursPerWeek
    )
    {
        return await Position.update(
            {
                positionName: newPositionName,
                positionSalary: newPositionSalary,
                positionHoursPerWeek: newPositionHoursPerWeek
            },
            {
                where: { positionName: positionName },
                returning: true,
                plain: true
            }
        );
    }

    static async deletePosition(positionName){
        return await Position.destroy( { where: { positionName: positionName } });
    }
}

module.exports = PositionsService;
