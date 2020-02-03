"use strict";

const crypto = require('crypto');
const __ALGORITHM__ = "aes-256-cbc";
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

console.log("key :" ,key);
console.log("iv :" ,iv.toString());

const __ENCODING__  = "hex";

function encrypt(text) {
 let cipher = crypto.createCipheriv(__ALGORITHM__, Buffer.from(key), iv);
 let encrypted = cipher.update(text);
 encrypted = Buffer.concat([encrypted, cipher.final()]);
 return { iv: iv.toString(__ENCODING__), encryptedData: encrypted.toString(__ENCODING__) };
}

function decrypt(text) {
 let iv = Buffer.from(text.iv, __ENCODING__);
 let encryptedText = Buffer.from(text.encryptedData, __ENCODING__);
 let decipher = crypto.createDecipheriv(__ALGORITHM__ , Buffer.from(key), iv);
 let decrypted = decipher.update(encryptedText);
 decrypted = Buffer.concat([decrypted, decipher.final()]);
 return decrypted.toString();
}

var hw = encrypt("SOME_THING_IMPORTANT");
console.log("hw :" ,hw);
console.log("decrypt(hw) :" ,decrypt(hw));