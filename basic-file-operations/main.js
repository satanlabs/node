"use strict";

var fs = require('fs');
const READ_FILE_LOCATION = "./episodes.json";
const WRITE_FILE_LOCATION = "./output.txt";

/* ================== READ - asynchronously (non-blocking) ==================== */
fs.readFile(READ_FILE_LOCATION, { encoding: 'utf-8' }, function (err, data) {
    if (!err) {
        /* here data will be in string format, one needs to convert it to JSON */
        const jsonData = JSON.parse(data);
        console.log('jsonData : ', jsonData);
    } else {
        console.log(err);
    }
});

/* ================== READ - synchronously (blocking) ==================== */
var contents = fs.readFileSync(READ_FILE_LOCATION, 'utf8');
const jsonData = JSON.parse(contents);
console.log('jsonData : ', jsonData);


/* ================== APPEND - asynchronously (non-blocking) ==================== */
fs.appendFile(WRITE_FILE_LOCATION, 'data to append- ASYNC.\n', function (err) {
    if (!err) {
        console.log('Appended data to file!');
    } else {
        console.log(err);
    }
});

/* ================== APPEND - synchronously (blocking) ==================== */
fs.appendFileSync(WRITE_FILE_LOCATION, 'data to append.- SYNC\n');
