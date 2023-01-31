"use strict";

const mysql = require("promise-mysql");
const config = require("./config.json");

let helpers = {
    searchForests: async function(what) {
        const db = await mysql.createConnection(config);
        let sql = `SELECT forest_name AS NAME FROM rainforest WHERE forest_name LIKE ?;`;
        let res = await db.query(sql, [`%${what}%`]);

        return JSON.stringify(res, null, 4);
    },
    getAllForests: async function() {
        const db = await mysql.createConnection(config);
        let sql = `SELECT * FROM rainforest;`;
        let res = await db.query(sql);

        return res;
    }
}

// async function searchForests(db, what) {
//     let sql = `SELECT forest_name AS NAME FROM rainforest WHERE forest_name LIKE ?;`;
//     let res = await db.query(sql, [`%${what}%`]);

//     return JSON.stringify(res, null, 4);
// }

module.exports = helpers;
