"use strict";

/*
Here , binary-string `hello` will be converted to base64
( https://tools.ietf.org/html/rfc4648)

The output base64-encoded-string will be : `aGVsbG8K` .
*/
const SOME_IMPORTANT_TEXT = 'hello';

// encode the string to base64-string  
const encodedData = Buffer.from(SOME_IMPORTANT_TEXT, 'binary').toString('base64'); 

// decode the base64-string to string
const decodedData = Buffer.from(encodedData, 'base64').toString('binary');



