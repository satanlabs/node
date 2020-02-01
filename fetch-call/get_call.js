"use strict";

const fetch = require("node-fetch");

fetch("http://example.com/api/users",
    {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res => {
        if (res.status != 200) { throw new Error("HTTP-RESPONSE-STATUS NOT 200"); }
        else { return res.json(); }
    }
    )
    .then(
        (result) => {
            console.log("FETCH : result :", result);
        },
        (error) => {
            console.log("FETCH : error :", error);
        }
    );
