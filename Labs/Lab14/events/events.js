'use strict';

const config = require('../config');
const sql = require('mssql');

const getFaculties = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const list = await pool.request().query('SELECT * FROM FACULTY;');
        return list.recordset;
    } catch (error) {
        return error.message;
    }
}

const getPulpits = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const list = await pool.request().query('SELECT * FROM PULPIT;');
        return list.recordset;
    } catch (error) {
        return error.message;
    }
}

const getSubjects = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const list = await pool.request().query('SELECT * FROM SUBJECT;');
        return list.recordset;
    } catch (error) {
        return error.message;
    }
}

const getAuditoriumsTypes = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const list = await pool.request().query('SELECT * FROM AUDITORIUMS_TYPE;');
        return list.recordset;
    } catch (error) {
        return error.message;
    }
}

const getAuditoriums = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const list = await pool.request().query('SELECT * FROM AUDITORIUM;');
        return list.recordset;
    } catch (error) {
        return error.message;
    }
}

const postFaculty = async (facultyData) => {
    try {
        let pool = await sql.connect(config.sql);
        const newFaculty = await pool.request()
            .input('FACULTY', sql.NVarChar(10), facultyData.FACULTY)
            .input('FACULTY_NAME', sql.NVarChar(50), facultyData.FACULTY_NAME)
            .query('INSERT INTO FACULTY (FACULTY, FACULTY_NAME) VALUES (@FACULTY, @FACULTY_NAME);');
        return newFaculty.recordset;
    } catch (error) {
        return error.message;
    }
}

const postPulpit = async (pulpitData) => {
    try {
        let pool = await sql.connect(config.sql);
        const newPulpit = await pool.request()
            .input('PULPIT', sql.NVarChar(20), pulpitData.PULPIT)
            .input('PULPIT_NAME', sql.NVarChar(100), pulpitData.PULPIT_NAME)
            .input('FACULTY', sql.NVarChar(10), pulpitData.FACULTY)
            .query('INSERT INTO PULPIT (PULPIT, PULPIT_NAME, FACULTY) VALUES (@PULPIT, @PULPIT_NAME, @FACULTY);');
        return newPulpit.recordset;
    } catch (error) {
        return error.message;
    }
}

const postSubject = async (subjectData) => {
    try {
        let pool = await sql.connect(config.sql);
        const newSubject = await pool.request()
            .input('SUBJECT', sql.NVarChar(10), subjectData.SUBJECT)
            .input('SUBJECT_NAME', sql.NVarChar(100), subjectData.SUBJECT_NAME)
            .input('PULPIT', sql.NVarChar(20), subjectData.PULPIT)
            .query('INSERT INTO SUBJECT (SUBJECT, SUBJECT_NAME, PULPIT) VALUES (@SUBJECT, @SUBJECT_NAME, @PULPIT);');
        return newSubject.recordset;
    } catch (error) {
        return error.message;
    }
}

const postAuditoriumType = async (auditoriumTypeData) => {
    try {
        let pool = await sql.connect(config.sql);
        const newAuditoriumType = await pool.request()
            .input('AUDITORIUM_TYPE', sql.NVarChar(10), auditoriumTypeData.AUDITORIUM_TYPE)
            .input('AUDITORIUM_TYPENAME', sql.NVarChar(30), auditoriumTypeData.AUDITORIUM_TYPENAME)
            .query('INSERT INTO AUDITORIUMS_TYPE (AUDITORIUM_TYPE, AUDITORIUM_TYPENAME) VALUES (@AUDITORIUM_TYPE, @AUDITORIUM_TYPENAME);');
        return newAuditoriumType.recordset;
    } catch (error) {
        return error.message;
    }
}

const postAuditorium = async (auditoriumData) => {
    try {
        let pool = await sql.connect(config.sql);
        const newAuditorium = await pool.request()
            .input('AUDITORIUM', sql.NVarChar(20), auditoriumData.AUDITORIUM)
            .input('AUDITORIUM_TYPE', sql.NVarChar(10), auditoriumData.AUDITORIUM_TYPE)
            .input('AUDITORIUM_CAPACITY', sql.Int, auditoriumData.AUDITORIUM_CAPACITY)
            .input('AUDITORIUM_NAME', sql.NVarChar(50), auditoriumData.AUDITORIUM_NAME)
            .query('INSERT INTO AUDITORIUM (AUDITORIUM, AUDITORIUM_TYPE, AUDITORIUM_CAPACITY, AUDITORIUM_NAME) VALUES (@AUDITORIUM, @AUDITORIUM_TYPE, @AUDITORIUM_CAPACITY, @AUDITORIUM_NAME);');
        return newAuditorium.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateFaculty = async (faculty, facultyData) => {
    try {
        let pool = await sql.connect(config.sql);
        const updatedFaculty = await pool.request()
            .input('FACULTY', sql.NVarChar(10), faculty)
            .input('FACULTY_NAME', sql.NVarChar(50), facultyData.FACULTY_NAME)
            .query('UPDATE FACULTY SET FACULTY_NAME=@FACULTY_NAME WHERE FACULTY=@FACULTY');
        return updatedFaculty.recordset;
    } catch (error) {
        return error.message;
    }
}

const updatePulpit = async (pulpit, pulpitData) => {
    try {
        let pool = await sql.connect(config.sql);
        const updatedPulpit = await pool.request()
            .input('PULPIT', sql.NVarChar(20), pulpit)
            .input('FACULTY', sql.NVarChar(10), pulpitData.FACULTY)
            .query('UPDATE PULPIT SET FACULTY=@FACULTY WHERE PULPIT=@PULPIT;');
        return updatedPulpit.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateSubject = async (subject, subjectData) => {
    try {
        let pool = await sql.connect(config.sql);
        const updatedSubject = await pool.request()
            .input('SUBJECT', sql.NVarChar(10), subject)
            .input('PULPIT', sql.NVarChar(20), subjectData.PULPIT)
            .query('UPDATE SUBJECT SET PULPIT=@PULPIT WHERE SUBJECT=@SUBJECT;');
        return updatedSubject.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateAuditoriumType = async (auditoriumType, auditoriumTypeData) => {
    try {
        let pool = await sql.connect(config.sql);
        const updatedAuditoriumType = await pool.request()
            .input('AUDITORIUM_TYPE', sql.NVarChar(10), auditoriumType)
            .input('AUDITORIUM_TYPENAME', sql.NVarChar(30), auditoriumTypeData.AUDITORIUM_TYPENAME)
            .query('UPDATE AUDITORIUMS_TYPE SET AUDITORIUM_TYPENAME=@AUDITORIUM_TYPENAME WHERE AUDITORIUM_TYPE=@AUDITORIUM_TYPE;');
        return updatedAuditoriumType.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateAuditorium = async (auditorium, auditoriumData) => {
    try {
        let pool = await sql.connect(config.sql);
        const updatedAuditorium = await pool.request()
            .input('AUDITORIUM', sql.NVarChar(20), auditorium)
            .input('AUDITORIUM_TYPE', sql.NVarChar(10), auditoriumData.AUDITORIUM_TYPE)
            .input('AUDITORIUM_NAME', sql.NVarChar(50), auditoriumData.AUDITORIUM_NAME)
            .input('AUDITORIUM_CAPACITY', sql.Int, auditoriumData.AUDITORIUM_CAPACITY)
            .query('UPDATE AUDITORIUM SET AUDITORIUM_TYPE=@AUDITORIUM_TYPE, AUDITORIUM_NAME=@AUDITORIUM_NAME, AUDITORIUM_CAPACITY=@AUDITORIUM_CAPACITY WHERE AUDITORIUM=@AUDITORIUM;');
        return updatedAuditorium.recordset;
    } catch (error) {
        return error.message;
    }
}

const deleteFaculty = async (faculty) => {
    try {
        let pool = await sql.connect(config.sql);
        const deletedFaculty = await pool.request()
            .input('FACULTY', sql.NVarChar(10), faculty)
            .query('DELETE FROM FACULTY WHERE FACULTY=@FACULTY');
        return deletedFaculty.recordset;
    } catch (error) {
        return error.message;
    }
}

const deletePulpit = async (pulpit) => {
    try {
        let pool = await sql.connect(config.sql);
        const deletedPulpit = await pool.request()
            .input('PULPIT', sql.NVarChar(20), pulpit)
            .query('DELETE FROM PULPIT WHERE PULPIT=@PULPIT');
        return deletedPulpit.recordset;
    } catch (error) {
        return error.message;
    }
}

const deleteSubject = async (subject) => {
    try {
        let pool = await sql.connect(config.sql);
        const deletedSubject = await pool.request()
            .input('SUBJECT', sql.NVarChar(10), subject)
            .query('DELETE FROM SUBJECT WHERE SUBJECT=@SUBJECT');
        return deletedSubject.recordset;
    } catch (error) {
        return error.message;
    }
}

const deleteAuditoriumType = async (auditoriumType) => {
    try {
        let pool = await sql.connect(config.sql);
        const deletedAuditoriumType = await pool.request()
            .input('AUDITORIUM_TYPE', sql.NVarChar(10), auditoriumType)
            .query('DELETE FROM AUDITORIUMS_TYPE WHERE AUDITORIUM_TYPE=@AUDITORIUM_TYPE');
        return deletedAuditoriumType.recordset;
    } catch (error) {
        return error.message;
    }
}

const deleteAuditorium = async (auditorium) => {
    try {
        let pool = await sql.connect(config.sql);
        const deletedAuditorium = await pool.request()
            .input('AUDITORIUM', sql.NVarChar(10), auditorium)
            .query('DELETE FROM AUDITORIUM WHERE AUDITORIUM=@AUDITORIUM');
        return deletedAuditorium.recordset;
    } catch (error) {
        return error.message;
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