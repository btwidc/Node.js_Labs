'use strict';

const eventData = require('../events/events');

const getFaculties = async (req, res) => {
    try {
        const faculties = await eventData.getFaculties();
        res.json(faculties);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getPulpits = async (req, res) => {
    try {
        const pulpits = await eventData.getPulpits();
        res.json(pulpits);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getSubjects = async (req, res) => {
    try {
        const subjects = await eventData.getSubjects();
        res.json(subjects);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getAuditoriumsTypes = async (req, res) => {
    try {
        const auditoriumTypes = await eventData.getAuditoriumsTypes();
        res.json(auditoriumTypes);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getAuditoriums = async (req, res) => {
    try {
        const auditoriums = await eventData.getAuditoriums();
        res.json(auditoriums);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const postFaculty = async (req, res) => {
    try {
        const data = req.body;
        console.log(data);
        const newFaculty = await eventData.postFaculty(data);
        res.json(newFaculty);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const postPulpit = async (req, res) => {
    try {
        const data = req.body;
        console.log(data);
        const newPulpit = await eventData.postPulpit(data);
        res.json(newPulpit);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const postSubject = async (req, res) => {
    try {
        const data = req.body;
        console.log(data);
        const newSubject = await eventData.postSubject(data);
        res.json(newSubject);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const postAuditoriumType = async (req, res) => {
    try {
        const data = req.body;
        console.log(data);
        const newAuditoriumType = await eventData.postAuditoriumType(data);
        res.json(newAuditoriumType);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const postAuditorium = async (req, res) => {
    try {
        const data = req.body;
        console.log(data);
        const newAuditorium = await eventData.postAuditorium(data);
        res.json(newAuditorium);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateFaculty = async (req, res) => {
    try {
        const faculty = req.params.faculty;
        console.log(faculty);
        const data = req.body;
        console.log(data);
        const updatedFaculty = await eventData.updateFaculty(faculty, data);
        res.json(updatedFaculty);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updatePulpit = async (req, res) => {
    try {
        const pulpit = req.params.pulpit;
        console.log(pulpit);
        const data = req.body;
        console.log(data);
        const updatedPulpit = await eventData.updatePulpit(pulpit, data);
        res.json(updatedPulpit);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateSubject = async (req, res) => {
    try {
        const subject = req.params.subject;
        console.log(subject);
        const data = req.body;
        console.log(data);
        const updatedSubject = await eventData.updateSubject(subject, data);
        res.json(updatedSubject);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateAuditoriumType = async (req, res) => {
    try {
        const auditoriumType = req.params.auditoriumtype;
        console.log(auditoriumType);
        const data = req.body;
        console.log(data);
        const updatedAuditoriumType = await eventData.updateAuditoriumType(auditoriumType, data);
        res.json(updatedAuditoriumType);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateAuditorium = async (req, res) => {
    try {
        const auditorium = req.params.auditorium;
        console.log(auditorium);
        const data = req.body;
        console.log(data);
        const updatedAuditorium = await eventData.updateAuditorium(auditorium, data);
        res.json(updatedAuditorium);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteFaculty = async (req, res) => {
    try {
        const faculty = req.params.faculty;
        console.log(faculty);
        const deletedFaculty = await eventData.deleteFaculty(faculty);
        res.json(deletedFaculty);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deletePulpit = async (req, res) => {
    try {
        const pulpit = req.params.pulpit;
        console.log(pulpit);
        const deletedPulpit = await eventData.deletePulpit(pulpit);
        res.json(deletedPulpit);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteSubject = async (req, res) => {
    try {
        const subject = req.params.subject;
        console.log(subject);
        const deletedSubject = await eventData.deleteSubject(subject);
        res.json(deletedSubject);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteAuditoriumType = async (req, res) => {
    try {
        const auditoriumType = req.params.auditoriumtype;
        console.log(auditoriumType);
        const deletedAuditoriumType = await eventData.deleteAuditoriumType(auditoriumType);
        res.json(deletedAuditoriumType);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteAuditorium = async (req, res) => {
    try {
        const auditorium = req.params.auditorium;
        console.log(auditorium);
        const deletedAuditorium = await eventData.deleteAuditorium(auditorium);
        res.json(deletedAuditorium);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
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
}