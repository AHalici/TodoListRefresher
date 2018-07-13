const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const helmet = require('helmet')
// const connection = require('../database/mongoDatabase/index');
// const connection = require('../database/mysqlDatabase/index');
const router = require('./router');

const server = express();
const port = 3000;

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, '../client/dist/')));

server.use('/api', router);

server.listen(port, () => console.log('server is connected'));