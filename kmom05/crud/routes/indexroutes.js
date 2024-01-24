"use strict";

const express = require("express");
const forests = require("../src/forests");
const router = express.Router();

router.get("/", (req, res) => {
    let data = {};
    data.title = "Start";

    res.render("pages/index", data);
})

router.get("/about", (req, res) => {
    let data = {};
    data.title = "About";

    res.render("pages/about", data);
})

router.get("/forests", async (req, res) => {
    let data = {};
    data.title = "all forests"
    data.all = await forests.getAll();

    res.render("pages/forests", data);
})

router.get("/create", async (req, res) => {
    let data = {};
    data.title = "all forests"
    data.all = await forests.getAll();

    res.render("pages/create", data);
})

router.post("/create", async (req, res) => {
    console.log(req.body);
    await forests.insertForest(req.body);
    res.redirect("/forests");
})

router.get("/update/:acronym", async (req, res) => {
    let data = {};
    data.title = "Update";
    data.forest = await forests.getOneForest(req.params.acronym);
    res.render("pages/update", data);
})

router.post("/update", async (req, res) => {
    await forests.updateForest(req.body);
    res.redirect("/forests");
})

router.get("/delete/:acronym", async (req, res) => {
    let data = {};
    data.title = "Delete";
    data.forest = await forests.getOneForest(req.params.acronym);
    res.render("pages/delete", data);
})

router.post("/delete", async (req, res) => {
    await forests.deleteForest(req.body);
    res.redirect("/forests");
})

module.exports = router;