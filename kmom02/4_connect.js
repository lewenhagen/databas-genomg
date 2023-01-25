"use strict";

const mysql = require("promise-mysql");
let test = require("./text.txt");

console.log(test)
/**
 * Main function.
 * @async
 * @returns void
 */
(async function() {
    let sql;
    let res;
    const db = await mysql.createConnection({
        "host":     "localhost",
        "user":     "dbadm",
        "password": "P@ssw0rd",
        "database": "forest"
    });

    sql = "SELECT * FROM rainforest;";
    res = await db.query(sql);

    console.info(res);

    db.end();
})();

// loopa med for of...
// JSON.stringify(res, null, 4);
