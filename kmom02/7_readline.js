"use strict";

const mysql = require("promise-mysql");
const config = require("./config.json");
const helpers = require("./helpers.js");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


(async function() {
    const db = await mysql.createConnection(config);

    rl.question("Vad vill du söka efter? ", async (search) => {
        let data = await helpers.searchForests(db, search);

        console.log(data);
        rl.close();
        db.end();
    });



    // console.log(data);

    // db.end();
})();
