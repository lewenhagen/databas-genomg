"use strict";

const fs = require("fs");
const path = "./text.txt";

(function () {
    console.log("BEFORE");
    fs.readFile(path, "utf8", function(err, data) {
        console.log(data);
    });
    
    console.log("AFTER");
})();



