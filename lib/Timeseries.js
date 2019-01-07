'use strict';

const Label = require('./Label');
const Point = require('./Point');

const Timeseries = class Timeseries {
    constructor() {
        this.label = [];  // Label | repeated
        this.point = [];  // Point | repeated
    }
};

module.exports = Timeseries;
