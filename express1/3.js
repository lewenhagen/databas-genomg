// 1. Lyft ut till routes/index.js

"use strict";

const express = require("express");
const indexRoutes = require("./routes/index.js");
const port = 1333;
const app = express(); 

app.use((req, res, next) => {
    console.log(`${new Date().toLocaleString()} - Got a request on: ${req.path} (${req.method})`);
    next();
});

app.use(indexRoutes);

app.listen(port, () => {
    console.log(`Server is listening on: ${port}`);
});