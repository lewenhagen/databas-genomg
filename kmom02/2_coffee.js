"use strict";

// let coffee = {
//     roast: "Dark roast",
//     pour: function () {
//         console.log(`Pouring som ${this.roast}.`);
//     }
// };

function coffee (brand, roast) {
    this.brand = brand;
    this.roast = roast;
    this.pour = function () {
        console.log(`Pouring some ${this.brand} - ${this.roast}.`);
    };
}

module.exports = coffee;