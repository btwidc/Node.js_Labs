const sequelize = require('./db/db');
const DataTypes = require('sequelize');

const Position = sequelize.define(
    'position',
    {
        positionID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            required: true,
        },
        positionName: {
            type: DataTypes.STRING(50),
            unique: true,
            allowNull: false,
            required: true,
        },
        positionSalary: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            required: true,
        },
        positionHoursPerWeek: {
            type: DataTypes.INTEGER,
            allowNull: false,
            required: true,
        },
    },
    {
        timestamps: false,
        tableName: 'Position',
    }
);

const Recruiter = sequelize.define(
    'recruiter',
    {
        recruiterID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            required: true,
        },
        recruiterName: {
            type: DataTypes.STRING(50),
            allowNull: false,
            required: true,
        },
        recruiterSurname: {
            type: DataTypes.STRING(50),
            allowNull: false,
            required: true,
        },
        recruiterEmail: {
            type: DataTypes.STRING(50),
            unique: true,
            allowNull: false,
            required: true,
        },
        recruiterPhone: {
            type: DataTypes.STRING(50),
            allowNull: false,
            required: true,
        },
        recruiterExperience: {
            type: DataTypes.INTEGER,
            allowNull: false,
            required: true,
        },
    },
    {
        timestamps: false,
        tableName: 'Recruiter',
    }
);

const Employer = sequelize.define(
    'employer',
    {
        employerID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            required: true,
        },
        employerName: {
            type: DataTypes.STRING(50),
            allowNull: false,
            required: true,
        },
        employerSurname: {
            type: DataTypes.STRING(50),
            allowNull: false,
            required: true,
        },
        employerEmail: {
            type: DataTypes.STRING(50),
            unique: true,
            allowNull: false,
            required: true,
        },
        employerPhone: {
            type: DataTypes.STRING(50),
            allowNull: false,
            required: true,
        },
        employerExperience: {
            type: DataTypes.INTEGER,
            allowNull: false,
            required: true,
        },
        employerStreetAddress: {
            type: DataTypes.STRING(50),
            allowNull: false,
            required: true,
        },
        employerCity: {
            type: DataTypes.STRING(50),
            allowNull: false,
            required: true,
        },
        employerCountry: {
            type: DataTypes.STRING(50),
            allowNull: false,
            required: true,
        },
    },
    {
        timestamps: false,
        tableName: 'Employer',
    }
);

const Offer = sequelize.define(
    'offer',
    {
        offerID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            required: true,
        },
    },
    {
        timestamps: false,
        tableName: 'Offer',
    }
);

Position.hasMany(Recruiter, {foreignKey: 'recruiterPositionId'});

Position.hasMany(Offer, {foreignKey: 'positionID'});
Recruiter.hasMany(Offer, {foreignKey: 'recruiterID'});
Employer.hasMany(Offer, {foreignKey: 'employerID'});

module.exports = { Position, Recruiter, Employer, Offer };
