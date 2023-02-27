"use strict";

const mysql = require("promise-mysql");
const config = require("../config.json");


// searchForests: async function(what) {
//     const db = await mysql.createConnection(config);
//     let sql = `SELECT forest_name AS NAME FROM rainforest WHERE forest_name LIKE ?;`;
//     let res = await db.query(sql, [`%${what}%`]);

//     return JSON.stringify(res, null, 4);
// },
async function getAllForests () {
    const db = await mysql.createConnection(config);
    let sql = `SELECT * FROM rainforest;`;
    let res = await db.query(sql);

    return res;
}

async function getOne (acronym) {
    const db = await mysql.createConnection(config);
    let sql = `SELECT * FROM rainforest WHERE acronym = ?;`;
    let res = await db.query(sql, [acronym]);

    return res[0];
}

async function getAllNames () {
    const db = await mysql.createConnection(config);
    let sql = `SELECT forest_name, acronym FROM rainforest;`;
    let res = await db.query(sql);

    return res;
}


module.exports = {
    getAllForests: getAllForests,
    getAllNames: getAllNames,
    getOne: getOne
};
