"use strict";

"use strict";

const mysql = require("promise-mysql");
const config = require("../config.json");
const helpers = require("./helpers.js");
const readline = require('readline-promise').default;

// const console = require("console");

(async function() {
    const db = await mysql.createConnection(config);

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    let search = await rl.questionAsync("Search for: ")
    let data = await helpers.searchForests(db, search);

    console.table(JSON.parse(data));

    rl.close();
    db.end();
})();
