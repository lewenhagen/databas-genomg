// mesidan
// vi får itne nå mapparna
// vi behöver public mapp
//
"use strict";

const express = require("express");
const indexRoutes = require("./routes/index.js");
const port = 1334;
const app = express();

// Sätt #1
// app.use(express.static("public"));

// Sätt #2 absolut om man inte startar servern i rätt mapp
const path = require('path')
app.use("ROUTE", express.static(path.join(__dirname, 'public')))


app.use((req, res, next) => {
    console.log(`${new Date().toLocaleString()} - Got a request on: ${req.path} (${req.method})`);
    next();
});

app.use(indexRoutes);
 
app.listen(port, () => {
    console.log(`Server is listening on: ${port}`);
});