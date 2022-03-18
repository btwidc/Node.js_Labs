const PositionsService = require("../services/positionsService");

class PositionsController {
    static async getPositions(req, res, next){
        try {
            const positionsData = await PositionsService.getPositions();
            res.json(positionsData);
        }
        catch (e){
            res.json("Error");
        }
    }

    static async addPosition(req, res, next){
        try {
            const {
                positionName,
                positionSalary,
                positionHoursPerWeek
            } = req.body;
            const positionData = await PositionsService.addPosition(
                positionName,
                positionSalary,
                positionHoursPerWeek
            );
            res.json(positionData);
        }
        catch (e){
            res.json("Error");
        }
    }

    static async updatePosition(req, res, next){
        try {
            const {
                positionName,
                newPositionName,
                newPositionSalary,
                newPositionHoursPerWeek
            } = req.body;
            const positionData = await PositionsService.updatePosition(
                positionName,
                newPositionName,
                newPositionSalary,
                newPositionHoursPerWeek
            );
            res.json(positionData);
        }
        catch (e){
            res.json("Error");
        }
    }

    static async deletePosition(req, res, next){
        try {
            const positionName = req.body.positionName;
            const positionsData = await PositionsService.deletePosition(positionName);
            res.json(positionsData);
        }
        catch (e){
            res.json("Error");
        }
    }
}

module.exports = PositionsController;