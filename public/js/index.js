var socket = io();
socket.on('connect', function() {
    console.log('Connected to server');
    // socket.emit('createMessage', {
    //     to: 'Niraj.1d',
    //     text: 'Hey there!'
    // });
});

socket.on('disconnect', function() {
    console.log('Disconnected from server');
});

//new message event
socket.on('newMessage', function(message) {
    console.log('New Message received!',message);

    var li = jQuery('<li></li>');
    li.text(`${message.from}: ${message.text}`);

    jQuery('#messages').append(li);
});

// socket.emit('createMessage',{
//     from: 'Nirajx1d',
//     text: 'Hey there! Is it working?'
// },function (data) {     //this callback function fires when an acknowledgement is received by the client
//     console.log('Got it!',data);
// });

jQuery('#message-form').on('submit', function(e) {
    e.preventDefault();

    socket.emit('createMessage', {
        from: 'User',
        text: jQuery('[name = message]').val()
    }, function() {

    });
});