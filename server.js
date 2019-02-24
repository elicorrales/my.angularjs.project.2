'use strict';
const express = require('express');
const server = express();
const host = 'localhost';
const port = 8080;

//this is used to serve up files such as index.html, angular.min.js, angular.min.js.map, etc.
server.use(express.static(__dirname + '/src'));

server.get('/favicon.ico',(req,res)=> res.status(204));

//this is a fallback request handler when nothing else worked
server.get('*',(req,res)=> {
    console.log('You hit GET ' + req.path);
    res.status(404);
    res.send('Not Found');
    //res.sendFile(__dirname + '/src/index.html');
});

server.listen(port,host,() => console.log('server is listening on port ' + port));