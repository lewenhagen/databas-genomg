// port mellan 1 - ~65000
// många är låsta, finns listor på tex wikipedia
// standard http 80, ssh 22
"use strict";

const express = require("express");
const port = 1331;
const app = express();

app.get("/", (req, res) => { // get vs post GET = HÄMTA INFORMATION
    console.log(`Root route`); // felsök även här
    res.send("<h1>yay</h1>");
}); 

app.get("/about", (req, res) => {
    res.send("<h1>About route</h1>");
});

// app.post() syns inte, tex formulär, post = SKAPA, LÄGGA TILL

app.listen(port, () => {
    console.log(`Server is listening on: ${port}`);
});

// npm run start --kmom=index3.js
// "start": "nodemon express1/$npm_config_kmom"