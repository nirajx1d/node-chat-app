var socket = io();
socket.on('connect', function() {
    console.log('Connected to server');
    socket.emit('createMessage', {
        to: 'Niraj.1d',
        text: 'Hey there!'
    });
});

socket.on('disconnect', function() {
    console.log('Disconnected from server');
});

//new message event
socket.on('newMessage', function(message) {
    console.log('New Message received!',message);
});