const express = require('express');
const http = require('http');
const socket = require('socket.io');

const app = express();

const port = process.env.PORT || 4001;
const server = http.createServer(app);

const io = socket(server);

const indexRoute = require('./routes/index-route');
app.use('/', indexRoute);

const getApiAndEmit = 'TODO';

