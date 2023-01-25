"use strict";

const mysql = require("promise-mysql");
const config = require("./config.json");
const searchForests = require("./helpers.js").searchForests;

(async function() {

    const db = await mysql.createConnection(config);

    let data = await searchForests(db, "am");

    console.log(data);

    db.end();
})();

// loopa med for of...
// JSON.stringify(res, null, 4);
