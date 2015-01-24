var conf = { 
    port: 8888,
    debug: false,
    dbPort: 6379,
    dbHost: '127.0.0.1',
    dbOptions: {},
    mainroom: 'MainRoom'
};

// External dependencies
var express = require('express'),
    http = require('http'),
    socketio = require('socket.io'),
    events = require('events'),
    _ = require('underscore'),
    redis = require('redis'),
    sanitize = require('validator').sanitize;

// HTTP Server configuration & launch
var app = express(),
    server = http.createServer(app),
    io = socketio.listen(server);
server.listen(conf.port);


io.sockets.on('connection', function(socket) {
  console.log('Hi !');
});
