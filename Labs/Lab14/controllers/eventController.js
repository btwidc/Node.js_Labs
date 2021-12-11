'use strict';

const eventData = require('../events/events');

const getFaculties = async (req, res) => {
    try {
        const faculties = await eventData.getFaculties();
        res.json(faculties);
    } catch (error) {
        Error_400(res, error);
    }
}

const getPulpits = async (req, res) => {
    try {
        const pulpits = await eventData.getPulpits();
        res.json(pulpits);
    } catch (error) {
        Error_400(res, error);
    }
}

const getSubjects = async (req, res) => {
    try {
        const subjects = await eventData.getSubjects();
        res.json(subjects);
    } catch (error) {
        Error_400(res, error);
    }
}

const getAuditoriumsTypes = async (req, res) => {
    try {
        const auditoriumTypes = await eventData.getAuditoriumsTypes();
        res.json(auditoriumTypes);
    } catch (error) {
        Error_400(res, error);
    }
}

const getAuditoriums = async (req, res) => {
    try {
        const auditoriums = await eventData.getAuditoriums();
        res.json(auditoriums);
    } catch (error) {
        Error_400(res, error);
    }
}

const postFaculty = async (req, res) => {
        const data = req.body;
        console.log(data);
        await eventData.postFaculty(data)
            .then(newFaculty => {
                console.log(newFaculty);
                res.end('Faculty inserted!' + '\n' + JSON.stringify(newFaculty));
            })
            .catch(error => {
                Error_400(res, error);
            })
}

const postPulpit = async (req, res) => {
        const data = req.body;
        console.log(data);
        await eventData.postPulpit(data)
            .then(newPulpit => {
                console.log(newPulpit);
                res.end('Pulpit inserted!' + '\n' + JSON.stringify(newPulpit));
            })
            .catch(error => {
                Error_400(res, error);
            })
}

const postSubject = async (req, res) => {
    try {
        const data = req.body;
        console.log(data);
        const newSubject = await eventData.postSubject(data);
        res.json(newSubject);
    } catch (error) {
        Error_400(res, error);
    }
}

const postAuditoriumType = async (req, res) => {
    try {
        const data = req.body;
        console.log(data);
        const newAuditoriumType = await eventData.postAuditoriumType(data);
        res.json(newAuditoriumType);
    } catch (error) {
        Error_400(res, error);
    }
}

const postAuditorium = async (req, res) => {
    try {
        const data = req.body;
        console.log(data);
        const newAuditorium = await eventData.postAuditorium(data);
        res.json(newAuditorium);
    } catch (error) {
        Error_400(res, error);
    }
}

const updateFaculty = async (req, res) => {
        const data = req.body;
        console.log(data);
        await eventData.updateFaculty(data)
            .then(updatedFaculty => {
                console.log(updatedFaculty);
                if (updatedFaculty.length == 0)
                    throw new Error('No such faculty')
                res.end('Faculty updated!' + '\n' + JSON.stringify(updatedFaculty));
            })
            .catch(error => {
                Error_400(res, error);
            })
}

const updatePulpit = async (req, res) => {
        const data = req.body;
        console.log(data);
        await eventData.updatePulpit(data)
        .then(updatedPulpit => {
            console.log(updatedPulpit);
            if (updatedPulpit.length == 0)
                throw new Error('No such pulpit')
            res.end('Pulpit updated!' + '\n' + JSON.stringify(updatedPulpit));
        })
            .catch(error => {
                Error_400(res, error);
            })
}

const updateSubject = async (req, res) => {
    try {
        const data = req.body;
        console.log(data);
        const updatedSubject = await eventData.updateSubject(data);
        res.json(updatedSubject);
    } catch (error) {
        Error_400(res, error);
    }
}

const updateAuditoriumType = async (req, res) => {
    try {
        const data = req.body;
        console.log(data);
        const updatedAuditoriumType = await eventData.updateAuditoriumType(data);
        res.json(updatedAuditoriumType);
    } catch (error) {
        Error_400(res, error);
    }
}

const updateAuditorium = async (req, res) => {
    try {
        const data = req.body;
        console.log(data);
        const updatedAuditorium = await eventData.updateAuditorium(data);
        res.json(updatedAuditorium);
    } catch (error) {
        Error_400(res, error);
    }
}

const deleteFaculty = async (req, res) => {
        const faculty = req.params.faculty;
        console.log(faculty);
        await eventData.deleteFaculty(faculty)
            .then(deletedFaculty => {
                console.log(deletedFaculty);
                if (deletedFaculty.length == 0)
                    throw new Error('No such faculty')
                res.end('Faculty deleted!' + '\nFaculty: ' + JSON.stringify(deletedFaculty));
                })
            .catch(error => {
               Error_400(res, error);
            })
}

const deletePulpit = async (req, res) => {
        const pulpit = req.params.pulpit;
        console.log(pulpit);
        await eventData.deletePulpit(pulpit)
        .then(deletedPulpit => {
            console.log(deletedPulpit);
            if (deletedPulpit.length == 0)
                throw new Error('No such pulpit')
            res.end('Pulpit deleted!' + '\nPulpit: ' + JSON.stringify(deletedPulpit));
        })
        .catch(error => {
            Error_400(res, error);
        })
}

const deleteSubject = async (req, res) => {
    try {
        const subject = req.params.subject;
        console.log(subject);
        const deletedSubject = await eventData.deleteSubject(subject);
        res.json(deletedSubject);
    } catch (error) {
        Error_400(res, error);
    }
}

const deleteAuditoriumType = async (req, res) => {
    try {
        const auditoriumType = req.params.auditoriumtype;
        console.log(auditoriumType);
        const deletedAuditoriumType = await eventData.deleteAuditoriumType(auditoriumType);
        res.json(deletedAuditoriumType);
    } catch (error) {
        Error_400(res, error);
    }
}

const deleteAuditorium = async (req, res) => {
    try {
        const auditorium = req.params.auditorium;
        console.log(auditorium);
        const deletedAuditorium = await eventData.deleteAuditorium(auditorium);
        res.json(deletedAuditorium);
    } catch (error) {
        Error_400(res, error);
    }
}

const Error_400 = (res, error) => {
    res.statusCode = 400;
    res.statusMessage = 'Error';
    res.end(error.message);
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