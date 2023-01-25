"use strict";

const fs = require("fs");
const util = require("util");
const readFileSync = util.promisify(fs.readFile);



async function getFile (path) {
    let data = await readFileSync(path, "utf8");
    return data;
    
}

async function main () {
    const path = "./text.txt";
    
    console.log("BEFORE");

    let data = await getFile(path);
    console.log(data);
    
    console.log("AFTER");
}


main();

