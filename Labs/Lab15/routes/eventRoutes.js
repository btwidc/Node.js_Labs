'use strict';

const express = require('express');
const router = express.Router();

const eventController = require('../eventController');

const{
    getFaculties,
    getPulpits,
    postFaculty,
    postPulpit,
    putFaculty,
    putPulpit,
    deleteFaculty,
    deletePulpit,
} = eventController;

router.get('/faculties', getFaculties);
router.get('/pulpits', getPulpits);

router.post('/faculties', postFaculty);
router.post('/pulpits', postPulpit);

router.put('/faculties', putFaculty);
router.put('/pulpits', putPulpit);

router.delete('/faculties/:faculty', deleteFaculty);
router.delete('/pulpits/:pulpit', deletePulpit);

module.exports = {
    routes: router
}