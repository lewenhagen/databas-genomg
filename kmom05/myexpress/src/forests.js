"use strict";

const mysql = require("promise-mysql");
const config = require("../config/db/config.json");


async function getAllForests () {
    const db = await mysql.createConnection(config);
    let sql = `SELECT * FROM rainforest;`;
    let res = await db.query(sql);

    return res;
}


module.exports = {
    getAll: getAllForests 
};
