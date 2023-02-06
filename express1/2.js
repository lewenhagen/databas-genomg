// MIDDLEWARE 
// Visa separat funktion sedan
"use strict";

const express = require("express");
const port = 1332;
const app = express();

function authenticate (req, res, next) { 
    if (req.session.user) {
        next();
    } else {
        res.redirect("/login");
    }
}
// innan alla routes
app.use((req, res, next) => {
    console.log(`${new Date().toLocaleString()} - Got a request on: ${req.path} (${req.method})`);
    next();
});

// gör denna sen
app.use((req, res, next) => {
    console.log(`I am second`);
    next();
});

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