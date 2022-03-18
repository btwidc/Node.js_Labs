const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const sequelize = require('./db/db');
const {Position, Recruiter, Employer, Offer} = require("./models");
const staffRouter = require("./routes/staffRouter");

const port = process.env.PORT || 4000;

const app = express();
app.use(express.json());

const start = async () => {
    try {
        await sequelize.authenticate();
        await Position.sync();
        await Recruiter.sync();
        await Employer.sync();
        await Offer.sync();

        app.use('/api', staffRouter);

        app.listen(port, () => {
            console.log(`App listening on port ${port}`);
        });
    } catch (e) {
        console.error(e);
    }
};

start();
