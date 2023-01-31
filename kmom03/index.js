"use strict";

// const mysql = require("promise-mysql");
// const config = require("../config.json");
const helpers = require("./helpers.js");
const readline = require('readline-promise').default;
// require('console.table');

const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });


// async function handleInput(search) {
//     const db = await mysql.createConnection(config);

//     console.log(`Searching for: ${search}`);
//     let data = await helpers.searchForests(db, search);
//     console.table(JSON.parse(data));
//     db.end();
//     rl.prompt();
// }

function showMenu() {
    console.log(`
        Choose something from the menu:

        exit, quit      Exit program
        menu, help      Show this menu

        forests        Show all forests
        sok <string>    Search for a forest

    `);
}

function exitProgram(code=0) {
    // code = code || 0;
    console.log(`Exiting with status code: ${code}`);
    process.exit(code);
}


(async function() {

    rl.setPrompt("Enter input: ");
    rl.prompt();

    rl.on("close", exitProgram);
    rl.on("line", async (input) => {
        input = input.trim();
        let inputParts = input.split(" ");

        switch (inputParts[0]) {
            case "quit":
            case "exit":
                exitProgram();
                break;
            case "menu":
            case "help":
                showMenu();
                break;
            case "forests":
                let res = await helpers.getAllForests();
                console.table(res);
                break;
            default:
                showMenu();
                break;
        }
        rl.prompt();
    })

    // let search = await rl.questionAsync("Search for: ")
    // let data = await helpers.searchForests(db, search);

    // console.table(JSON.parse(data));
    // exitProgram(1)
    // db.end();
})();
