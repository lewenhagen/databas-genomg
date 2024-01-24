"use strict";

const express = require("express");
const forests = require("../src/forests");
const router = express.Router();

router.get("/", (req, res) => {
    console.log("Root route");
    res.render("index");
})

router.get("/about", (req, res) => {
    console.log("About route");
    res.send("<h1>About route!</h1>");
})

router.get("/forests", async (req, res) => {
    console.log("Forest route");
    let data = {};
    data.all = await forests.getAll();
    console.log(data);
    res.render("forests", data);
})

module.exports = router;