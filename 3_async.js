"use strict";

const fs = require("fs").promises;
const path = "./text.txt";



// fs.readFile(path, "utf8", (err, data) => {
//     console.log(data);
// });

(async function () {
    console.log("BEFORE");
    let data = await fs.readFile(path, "utf8");
    console.log(data);
    
    console.log("AFTER");
})();



