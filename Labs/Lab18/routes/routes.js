const express = require('express');
const { Faculty, Pulpit, Subject, AuditoriumType, Auditorium, Teacher} = require("../models");
const sequelize = require("../db/db");

const router = express.Router();

router.route('/faculties')
    .get((request, response, next) => {
        Faculty.findAll()
            .then(data => {
                response.json(data);
            })
            .catch(e => {
                response.json("Error");
            });
    })
    .post((request, response, next) => {
        if (!request.body) {
            response.json("Error");
        }
        Faculty.create({
            faculty: request.body.faculty,
            faculty_name: request.body.faculty_name
        })
            .then(data => {
                response.json(data);
            })
            .catch(e => {
                response.json("Error");
            });
    })
    .put((request, response, next) => {
        if (!request.body) {
            response.json("Error");
        }
        Faculty.update(
            { faculty_name: request.body.faculty_name },
            {
                where: { faculty: request.body.faculty },
                returning: true,
                plain: true})
            .then(data => {
                response.json(data);
            })
            .catch(e => {
                response.json("Error");
            });
    });


router.delete('/faculties/:id', (request, response, next) => {
    if (!request.params) {
        response.json("Error");
    }
    Faculty.destroy(
        { where: { faculty: request.params.id } })
        .then(data => {
            response.json(JSON.stringify(data));
        })
        .catch(e => {
            response.json("Error");
        });
});

router.route('/faculties/:id/pulpits')
    .get((request, response, next) => {
        Faculty.findAll( {
            where: {
                faculty: request.params.id
            },
            include: {
                model: Pulpit,
                required: true,
            },
        })
            .then(data => {
                response.json(data);
            })
            .catch(e => {
                response.json("Error");
            });
    });

router.route('/faculties/:id/teachers')
    .get((request, response, next) => {
        Faculty.findAll( {
            where: {
                faculty: request.params.id
            },
            include: {
                model: Pulpit,
                required: true,
                include:{
                    model: Teacher,
                    required: true,
                }
            },
        })
            .then(data => {
                response.json(data);
            })
            .catch(e => {
                response.json("Error");
            });
    })


router.route('/pulpits')
    .get((request, response, next) => {
        Pulpit.findAll()
            .then(data => {
                response.json(data);
            })
            .catch(e => {
                response.json("Error");
            });
    })
    .post((request, response, next) => {
        if (!request.body) {
            response.json("Error");
        }
        Pulpit.create({
            pulpit: request.body.pulpit,
            pulpit_name: request.body.pulpit_name,
            faculty: request.body.faculty
        })
            .then(data => {
                response.json(data);
            })
            .catch(e => {
                response.json("Error");
            });
    })
    .put((request, response, next) => {
        if (!request.body){
            response.json("Error");
        }
        Pulpit.update(
            {
                pulpit_name: request.body.pulpit_name,
                faculty: request.body.faculty
            },
            {
            where: { pulpit: request.body.pulpit },
            returning: true,
            plain: true
            })
            .then(data => {
                response.json(data);
            })
            .catch(e => {
                response.json("Error");
            });
    });

router.delete('/pulpits/:id', (request, response, next) => {
    if (!request.params) {
        response.json("Error");
    }
    Pulpit.destroy(
        { where: { pulpit: request.params.id } })
        .then(data => {
            response.json(JSON.stringify(data));
        })
        .catch(e => {
            response.json("Error");
        });
});

router.route('/subjects')
    .get((request, response, next) => {
        Subject.findAll()
            .then(data => {
                response.json(data);
            })
            .catch(e => {
                response.json("Error");
            });
    })
    .post((request, response, next) => {
        if (!request.body) {
            response.json("Error");
        }
        Subject.create({
            subject: request.body.subject,
            subject_name: request.body.subject_name,
            pulpit: request.body.pulpit
        })
            .then(data => {
                response.json(data);
            })
            .catch(e => {
                response.json("Error");
            });
    })
    .put((request, response, next) => {
        if (!request.body){
            response.json("Error");
        }
        Subject.update(
            {
                subject_name: request.body.subject_name,
                pulpit: request.body.pulpit
            },
            {
                where: { subject: request.body.subject },
                returning: true,
                plain: true})
            .then(data => {
                response.json(data);
            })
            .catch(e => {
                response.json("Error");
            });
    });

router.delete('/subjects/:id', (request, response, next) => {
    if (!request.params) {
        response.json("Error");
    }
    Subject.destroy(
        {
            where: { subject: request.params.id } })
        .then(data => {
            response.json(JSON.stringify(data));
        })
        .catch(e => {
            response.json("Error");
        });
});

router.route('/auditoriumtypes')
    .get((request, response, next) => {
        AuditoriumType.findAll()
            .then(data => {
                response.json(data);
            })
            .catch(e => {
                response.json("Error");
            });
    })
    .post((request, response, next) => {
        if (!request.body) {
            response.json("Error");
        }
        AuditoriumType.create({
            auditorium_type: request.body.auditorium_type,
            auditorium_type_name: request.body.auditorium_type_name
        })
            .then(data => {
                response.json(data);
            })
            .catch(e => {
                response.json("Error");
            });
    })
    .put((request, response, next) => {
        if (!request.body){
            response.json("Error");
        }
        AuditoriumType.update(
            { auditorium_type_name: request.body.auditorium_type_name },
            {
                where: { auditorium_type: request.body.auditorium_type },
                returning: true,
                plain: true}
        )
            .then(data => {
                response.json(data);
            })
            .catch(e => {
                response.json("Error");
            });
    });

router.delete('/auditoriumtypes/:id', (request, response, next) => {
    if (!request.params) {
        response.json("Error");
    }
    AuditoriumType.destroy(
        {where: { auditorium_type: request.params.id } })
        .then(data => {
            response.json(JSON.stringify(data));
        })
        .catch(e => {
            response.json("Error");
        });
});

router.route('/auditoriums')
    .get((request, response, next) => {
        Auditorium.findAll()
            .then(data => {
                response.json(data);
            })
            .catch(e => {
                response.json("Error");
            });
    })
    .post((request, response, next) => {
        if (!request.body) {
            response.json("Error");
        }
        Auditorium.create({
            auditorium: request.body.auditorium,
            auditorium_name: request.body.auditorium_name,
            auditorium_capacity: request.body.auditorium_capacity,
            auditorium_type: request.body.auditorium_type
        })
            .then(data => {
                response.json(data);
            })
            .catch(e => {
                response.json("Error");
            });
    })
    .put((request, response, next) => {
        if (!request.body) {
            response.json("Error");
        }
        Auditorium.update(
            {
                auditorium_name: request.body.auditorium_name,
                auditorium_capacity: request.body.auditorium_capacity,
                auditorium_type: request.body.auditorium_type
            },
            {
                where: { auditorium: request.body.auditorium },
                returning: true,
                plain: true
            }
        )
            .then(data => {
                response.json(data);
            })
            .catch(e => {
                response.json("Error");
            });
    });

router.delete('/auditoriums/:id', (request, response, next) => {
    if (!request.params) {
        response.json("Error");
    }
    Auditorium.destroy(
        { where: { auditorium: request.params.id } }
    )
        .then(data => {
            response.json(JSON.stringify(data));
        })
        .catch(e => {
            response.json("Error");
        });
});

router.route('/auditoriumsgt60')
    .get((request, response, next) => {
        Auditorium.scope('auditoriums60').findAll()
            .then(data => {
                response.json(data);
            })
            .catch(e => {
                response.json("Error");
            });
    });

router.route('/auditoriumsSetNull')
    .post(async (request, response, next) => {
        return sequelize.transaction()
            .then((t) => {
            return Auditorium.update({
                    auditorium_capacity: 0
                },
                {
                    where:
                        {
                        },
                    transaction: t,
                })
                .then( () => {
                    return new Promise((resolve, reject) => {
                        setTimeout(() => {
                            try {
                                throw new Error();
                                resolve();
                            } catch (e) {
                                reject();
                            }
                        }, 10000)
                    })
                        .catch(() =>{
                            response.json("Rollback");
                            t.rollback();
                        })
                    })
            });
        })

module.exports = router;