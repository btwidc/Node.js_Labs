'use strict';

const MongoClient = require('mongodb').MongoClient;

const getFaculties = async (req, res) => {
    await MongoClient.connect('mongodb+srv://Kirill:Kirill@cluster0.kklqn.mongodb.net/test?retryWrites=true&w=majority')
        .then(client => {
            const db = client.db('BSTU');
            const facultyCollection = db.collection('faculty');
            facultyCollection.find().toArray()
                // .then(result => {
                //    res.render('listFaculties.ejs', { faculties: result });
                // })
                .then(result => res.end(JSON.stringify(result)))
                .catch(error => console.error(error))
        })
        .catch(error => console.error(error))
}

const getPulpits = async (req, res) => {
    await MongoClient.connect('mongodb+srv://Kirill:Kirill@cluster0.kklqn.mongodb.net/test?retryWrites=true&w=majority')
        .then(client => {
            const db = client.db('BSTU');
            const pulpitCollection = db.collection('pulpit');
            pulpitCollection.find().toArray()
                // .then(result => {
                //     res.render('listPulpits.ejs', { pulpits: result });
                // })
                .then(result => res.end(JSON.stringify(result)))
                .catch(error => console.error(error))
        })
        .catch(error => console.error(error))
}

const postFaculty = async (req, res) => {
    await MongoClient.connect('mongodb+srv://Kirill:Kirill@cluster0.kklqn.mongodb.net/test?retryWrites=true&w=majority')
    .then(client => {
        const db = client.db('BSTU');
        const facultyCollection = db.collection('faculty');
        facultyCollection.insertOne(req.body)
            // .then(result => {
            //     res.render('index.ejs');
            // })
            .then(result => res.end(JSON.stringify(result)))
            .catch(error => console.error(error))
    })
    .catch(error => console.error(error))
}

const postPulpit = async (req, res) => {
    await MongoClient.connect('mongodb+srv://Kirill:Kirill@cluster0.kklqn.mongodb.net/test?retryWrites=true&w=majority')
        .then(client => {
            const db = client.db('BSTU');
            const pulpitCollection = db.collection('pulpit');
            pulpitCollection.insertOne(req.body)
                // .then(result => {
                //     res.render('index.ejs');
                // })
                .then(result => res.end(JSON.stringify(result)))
                .catch(error => console.error(error))
        })
        .catch(error => console.error(error))
}

const putFaculty = async (req, res) => {
    await MongoClient.connect('mongodb+srv://Kirill:Kirill@cluster0.kklqn.mongodb.net/test?retryWrites=true&w=majority')
        .then(client => {
            const db = client.db('BSTU');
            const facultyCollection = db.collection('faculty');
            facultyCollection.updateOne(
                {
                    faculty: req.body.faculty,
                },
                    {
                        $set: {
                            faculty: req.body.newFaculty,
                            faculty_name: req.body.newFacultyName,
                        }
                    },
                )
                // .then(result => {
                //     res.render('index.ejs');
                // })
                .then(result => res.end(JSON.stringify(result)))
                .catch(error => console.error(error))
        })
        .catch(error => console.error(error))
}

const putPulpit = async (req, res) => {
    await MongoClient.connect('mongodb+srv://Kirill:Kirill@cluster0.kklqn.mongodb.net/test?retryWrites=true&w=majority')
        .then(client => {
            const db = client.db('BSTU');
            const pulpitCollection = db.collection('pulpit');
            pulpitCollection.updateOne(
                {
                    pulpit: req.body.pulpit,
                },
                {
                    $set: {
                        pulpit: req.body.newPulpit,
                        pulpit_name: req.body.newPulpitName,
                        pulpit_faculty: req.body.newFaculty,
                    }
                },
            )
                // .then(result => {
                //     res.render('index.ejs');
                // })
                .then(result => res.end(JSON.stringify(result)))
                .catch(error => console.error(error))
        })
        .catch(error => console.error(error))
}

const deleteFaculty = async (req, res) => {
    await MongoClient.connect('mongodb+srv://Kirill:Kirill@cluster0.kklqn.mongodb.net/test?retryWrites=true&w=majority')
        .then(client => {
            const db = client.db('BSTU');
            const facultyCollection = db.collection('faculty');
            facultyCollection.deleteOne({faculty: req.params.faculty})
                // .then(result => {
                //     res.render('index.ejs');
                // })
                .then(result => res.end(JSON.stringify(result)))
                .catch(error => console.error(error))
        })
        .catch(error => console.error(error))
}

const deletePulpit = async (req, res) => {
    await MongoClient.connect('mongodb+srv://Kirill:Kirill@cluster0.kklqn.mongodb.net/test?retryWrites=true&w=majority')
        .then(client => {
            const db = client.db('BSTU');
            const pulpitCollection = db.collection('pulpit');
            pulpitCollection.deleteOne({pulpit: req.params.pulpit})
                // .then(result => {
                //     res.render('index.ejs');
                // })
                .then(result => res.end(JSON.stringify(result)))
                .catch(error => console.error(error))
        })
        .catch(error => console.error(error))
}

module.exports = {
    getFaculties,
    getPulpits,
    postFaculty,
    postPulpit,
    putFaculty,
    putPulpit,
    deleteFaculty,
    deletePulpit,
}
