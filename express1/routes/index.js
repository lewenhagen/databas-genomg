"use strict";

const express = require("express");
const router = express.Router();

// router.get("/", (req, res) => { // get vs post GET = HÄMTA INFORMATION
//     console.log(`Root route`); // felsök även här
//     res.send("<h1>Root</h1>");
// }); 

router.get("/", (req, res) => { // get vs post GET = HÄMTA INFORMATION
    console.log(`Root route`); // felsök även här
    res.send("<h1>Root</h1>");
});

router.get("/about", (req, res) => {
    res.send("<h1>About route</h1>");
});

router.get("/*test", (req, res) => {
    res.send("<h1>Test route</h1>");
});

// router.get(/.*a$/, (req, res) => {
//     res.send("<h1>Regex route</h1>");
// });

router.get("/query", (req, res) => {
    console.log(req.query);
    res.send("<h1>query route</h1>");
});

router.get("/params/:first", (req, res) => {
    console.log(req.params);
    res.send("<h1>Params route</h1>");
});

router.get("/params/:first/:second", (req, res) => {
    console.log(req.params);
    res.send("<h1>Params route 2</h1>");
});

module.exports = router;