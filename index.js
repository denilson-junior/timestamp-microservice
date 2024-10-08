// index.js
// where your node app starts

// init project
//var express = require('express');
import express from "express";
var app = express();

// imports
import { dateTimeToUNIX, dateToUTC } from "./helpers.js";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
//var cors = require('cors');
import cors from "cors";
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

// endpoint para formatação de data
app.get("/api/:date?", function (req, res) {
    const { date } = req.params;
    // verificar se data tem formato correto

    if (!date) {
        res.json({unix: dateTimeToUNIX(new Date().getTime()), utc: dateToUTC(new Date().getTime())})
    } else {
        const dateToTimeUnix = dateTimeToUNIX(date)
        const utcDate = dateToUTC(date)

        if (dateToTimeUnix === "Invalid Date" && utcDate === "Invalid Date") {
            res.json({error: "Invalid Date"})
        } else {
            res.json({unix: dateToTimeUnix, utc: utcDate})
        }
    }
})

// Listen on port set in environment variable or default to 3000
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
