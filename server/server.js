const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');

const port = process.env.PORT || 3000;

// console.log(__dirname + '/../public');
// console.log(publicPath);

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection',(socket) => {
    console.log('New user connected');

    socket.emit('newMessage',{
        from: 'Nirajx1d',
        text: 'Hey! wassup!',
        createdAt: 1234
    });

    socket.on('createMessage', (message) => {
        console.log('createMessage',message);
    });
    
    socket.on('disconnect', () => {
        console.log('User was disonnected');
    });

});

server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});