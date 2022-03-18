const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const sequelize = require('./db/db');
const {Faculty, Pulpit, Teacher, Subject, AuditoriumType, Auditorium} = require("./models");

const router = require('./routes/routes');

const port = process.env.PORT || 4000;

const app = express();

app.use(express.json());

const start = async () => {
    try {
        await sequelize.authenticate();
        await Faculty.sync();
        await Pulpit.sync();
        await Teacher.sync();
        await Subject.sync();
        await AuditoriumType.sync();
        await Auditorium.sync();

        app.use('/api', router);
        app.get('/', (request, response) => {
            response.sendFile(__dirname + '/index.html');
        });

        app.listen(port, () => {
            console.log(`App listening on port ${port}`);
        });
    } catch (e) {
        console.error(e);
    }
};

start();
