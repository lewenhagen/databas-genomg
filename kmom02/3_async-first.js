"use strict";

const fs = require("fs");
const path = "./text.txt";

(function () {
    console.log("1) BEFORE");
    fs.readFile(path, "utf8", function(err, data) {
        console.log(data);
    });
    
    console.log("3) AFTER");
})();



