"use strict";

const express = require("express");
const forests = require("../src/forests.js");
const router = express.Router();

router.get("/", (req, res) => { // get vs post GET = HÄMTA INFORMATION

    res.render("pages/index");
});

router.get("/forests", async (req, res) => {
    let data = {};
    data.all = await forests.getAllForests();
    console.log(data.all)
    res.render("pages/forests", data);
});

router.get("/kmom06", async (req, res) => {
    let data = {};
    data.allNames = await forests.getAllNames();
    if (req.query.selected) {
        data.one = await forests.getOne(req.query.selected);
    }
    // console.log(data.all)
    res.render("pages/kmom06", data);
});

// router.post("/kmom06", async (req, res) => {
//     console.log(req.body);
//     res.redirect("/kmom06");
// });


module.exports = router;
