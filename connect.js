"use strict";

const mysql = require("promise-mysql");

/**
 * Main function.
 * @async
 * @returns void
 */
(async function() {
    let sql;
    let res;
    const db = await mysql.createConnection({
        "host":     "work.local",
        "user":     "dbadm",
        "password": "P@ssw0rd",
        "database": "forest"
    });

    sql = "SELECT 1+1 AS Sum";
    res = await db.query(sql);

    console.info(res);

    db.end();
})();