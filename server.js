const express = require('express');

const apiRouter = require('./routes.js')
server = express();

server.use(express.json());
server.use(express.json());
server.use('/api', apiRouter);

module.exports = server;