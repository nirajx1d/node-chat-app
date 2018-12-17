var moment = require('moment');

var createdAt = 1234;

var someTimestamp = moment().valueOf();
console.log(someTimestamp);
var date = moment(createdAt);

//date.add(100,'year').subtract(9,'months');
console.log(date.format('DD MM YYYY: hh mm ss A'));