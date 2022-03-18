const sequelize = require('./db/db');
const DataTypes = require('sequelize');
const {Op} = require("sequelize");

const Faculty = sequelize.define(
    'faculty',
    {
        faculty: {
            type: DataTypes.STRING(10),
            primaryKey: true,
            allowNull: false,
            required: true,
        },
        faculty_name: {
            type: DataTypes.STRING(50),
            allowNull: false,
            required: true,
        },
    },
    {
        timestamps: false,
        tableName: 'Faculty',
        hooks: {
            beforeCreate() {
                console.log("BeforeCreate");
            },
            afterCreate() {
                console.log("AfterCreate");
            },
        },
    }
);

const Pulpit = sequelize.define(
    'pulpit',
    {
        pulpit: {
            type: DataTypes.STRING(10),
            primaryKey: true,
            allowNull: false,
            required: true,
        },
        pulpit_name: {
            type: DataTypes.STRING(100),
            allowNull: false,
            required: true,
        },
    },
    { timestamps: false, tableName:'Pulpit' },
);

const Teacher = sequelize.define(
    'teacher',
    {
        teacher: {
            type: DataTypes.STRING(10),
            primaryKey: true,
            allowNull: false,
            required: true,
        },
        teacher_name: {
            type: DataTypes.STRING(50),
            allowNull: false,
            required: true,
        },
    },
    { timestamps: false, tableName:'Teacher' },
);

const Subject = sequelize.define(
    'subject',
    {
        subject: {
            type: DataTypes.STRING(10),
            primaryKey: true,
            allowNull: false,
            required: true,
        },
        subject_name: {
            type: DataTypes.STRING(50),
            allowNull: false,
            required: true,
        },
    },
    { timestamps: false, tableName:'Subject' },
);

const AuditoriumType = sequelize.define(
    'auditorium_type',
    {
        auditorium_type: {
            type: DataTypes.STRING(10),
            primaryKey: true,
            allowNull: false,
            required: true,
        },
        auditorium_type_name: {
            type: DataTypes.STRING(50),
            allowNull: false,
            required: true,
        },
    },
    { timestamps: false, tableName:'Auditorium_type' },
);

const Auditorium = sequelize.define(
    'auditorium',
    {
        auditorium: {
            type: DataTypes.STRING(10),
            primaryKey: true,
            allowNull: false,
            required: true,
        },
        auditorium_name: {
            type: DataTypes.STRING(50),
            allowNull: false,
            required: true,
        },
        auditorium_capacity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            required: true,
        },
    },
    {
        timestamps: false,
        tableName: 'Auditorium',
        scopes: {
            auditoriums60: {
                where: {
                    auditorium_capacity: {[Op.gt]: 60}
                }
            },
        }
    }
);

Faculty.hasMany(Pulpit, {foreignKey: 'faculty'});
Pulpit.hasMany(Teacher, {foreignKey: 'pulpit'});
Pulpit.hasMany(Subject, {foreignKey: 'pulpit'})
AuditoriumType.hasMany(Auditorium, {foreignKey: 'auditorium_type'});

module.exports = { Faculty, Pulpit, Teacher, Subject, AuditoriumType, Auditorium};
