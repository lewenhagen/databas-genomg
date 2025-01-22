"use strict";

const mysql = require("promise-mysql");
const config = require("../config/db/config.json");


async function getAllForests () {
    const db = await mysql.createConnection(config);
    // let sql = `SELECT 
    //     forest_name,
    //     location,
    //     acronym,
    //     area,
    //     forest_type,
    //     DATE_FORMAT(added, "%Y-%m-%d") as added
    // FROM rainforest;`;
    let sql = `CALL get_all();`;
    let res = await db.query(sql);
    console.log(res)
    return res[0];
}

async function insertForest (data) {
    const db = await mysql.createConnection(config);
    let sql = `CALL insert_forest(?, ?, ?, ?, ?);`;
    let res = await db.query(sql, Object.values(data));

    return res;
}

async function getOneForest (acronym) {
    const db = await mysql.createConnection(config);
    let sql = `SELECT 
        forest_name,
        location,
        acronym,
        area,
        forest_type,
        DATE_FORMAT(added, "%Y-%m-%d") as added
    FROM rainforest WHERE acronym = ?;`;
    let res = await db.query(sql, acronym);
    console.log(res);
    return res[0];
}

async function updateForests (data) {
    const db = await mysql.createConnection(config);
    let sql = `UPDATE rainforest SET 
        forest_name = ?,
        location = ?,
        area = ?,
        forest_type = ?,
        added = ?
    WHERE acronym = ?;`;
    await db.query(sql, [data.f_name, data.f_location, data.f_area, data.f_type, data.f_added, data.f_acronym]);
}

async function deleteForests (data) {
    const db = await mysql.createConnection(config);
    let sql = `DELETE FROM rainforest WHERE acronym = ?;`;
    await db.query(sql, [data.f_acronym]);
}


module.exports = {
    getAll: getAllForests,
    insertForest: insertForest,
    getOneForest: getOneForest,
    updateForest: updateForests,
    deleteForest: deleteForests 
};
