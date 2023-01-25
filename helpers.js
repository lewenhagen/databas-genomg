"use strict";

// let helpers = {
//     searchForests: async function(db, what) {
//         let sql = `SELECT forest_name AS NAME FROM rainforest WHERE forest_name LIKE ?;`;
//         let res = await db.query(sql, [`%${what}%`]);

//         return JSON.stringify(res, null, 4);
//     }
// }

async function searchForests(db, what) {
    let sql = `SELECT forest_name AS NAME FROM rainforest WHERE forest_name LIKE ?;`;
    let res = await db.query(sql, [`%${what}%`]);

    return JSON.stringify(res, null, 4);
}

module.exports = {
    searchForests: searchForests
};
