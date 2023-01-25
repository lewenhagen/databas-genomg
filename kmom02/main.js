"use strict";

const Cake = require('./cake.js');
const Coffee = require('./coffee.js');

let princessCake = new Cake("Princess cake");

princessCake.serve();

let zoegas = new Coffee("Dark roast");
let gevalia = new Coffee("Light roast");

zoegas.pour();
gevalia.pour();