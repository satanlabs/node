"use strict";

const fetch = require("node-fetch");

const requestPayload = {
    name: "John Doe",
    age: 27
}

fetch("http://example.com/api/users",
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(requestPayload)
    })
    .then((res) => {
        if (res.status != 201) { throw new Error("HTTP-RESPONSE-STATUS NOT 201"); }
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
