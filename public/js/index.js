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

//new location message
socket.on('newLocationMessage', function(message) {
    var li = jQuery('<li></li>');
    var a = jQuery('<a target="_blank">My current location</a>');
    li.text(`${message.from}: `);
    a.attr('href', message.url);  
    li.append(a);
    jQuery('#messages').append(li);
})

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

var locationButton = jQuery('#send-location');
locationButton.on('click', function() {
    if(!navigator.geolocation) {
        return alert('Geolocation not supported by your browser.');
    }

    navigator.geolocation.getCurrentPosition(function(position) {
        //console.log(position);
        socket.emit('createLocationMessage',{
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        });
    }, function() {
        alert('Unable to fetch location.');
    });

});