"use strict";

// let coffee = {
//     roast: "Dark roast",
//     pour: function () {
//         console.log(`Pouring som ${this.roast}.`);
//     }
// };

function coffee (roast) {
    this.roast = roast;
    this.pour = function () {
        console.log(`Pouring som ${this.roast}.`);
    };
}

module.exports = coffee;