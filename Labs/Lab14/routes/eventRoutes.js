'use strict';

const express = require('express');
const eventController = require('../controllers/eventController');
const router = express.Router();

const {
    getFaculties,
    getPulpits,
    getSubjects,
    getAuditoriumsTypes,
    getAuditoriums,
    postFaculty,
    postPulpit,
    postSubject,
    postAuditoriumType,
    postAuditorium,
    updateFaculty,
    updatePulpit,
    updateSubject,
    updateAuditoriumType,
    updateAuditorium,
    deleteFaculty,
    deletePulpit,
    deleteSubject,
    deleteAuditoriumType,
    deleteAuditorium,
} = eventController;

router.get('/faculties', getFaculties);
router.get('/pulpits', getPulpits);
router.get('/subjects', getSubjects);
router.get('/auditoriumstypes', getAuditoriumsTypes);
router.get('/auditoriums', getAuditoriums);

router.post('/faculties', postFaculty);
router.post('/pulpits', postPulpit);
router.post('/subjects', postSubject);
router.post('/auditoriumstypes', postAuditoriumType);
router.post('/auditoriums', postAuditorium);

router.put('/faculties/:faculty', updateFaculty);
router.put('/pulpits/:pulpit', updatePulpit);
router.put('/subjects/:subject', updateSubject);
router.put('/auditoriumstypes/:auditoriumtype', updateAuditoriumType);
router.put('/auditoriums/:auditorium', updateAuditorium);

router.delete('/faculties/:faculty', deleteFaculty);
router.delete('/pulpits/:pulpit', deletePulpit);
router.delete('/subjects/:subject', deleteSubject);
router.delete('/auditoriumstypes/:auditoriumtype', deleteAuditoriumType);
router.delete('/auditoriums/:auditorium', deleteAuditorium);

module.exports = {
    routes: router
}