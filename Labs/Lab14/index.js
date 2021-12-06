'use strict';

const express = require('express');
const config = require('./config');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const eventRoutes = require('./routes/eventRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api', eventRoutes.routes);
app.use('/static', express.static(__dirname + '/static'));

app.listen(config.port, () => console.log('Server is listening on http://localhost:' + config.port));