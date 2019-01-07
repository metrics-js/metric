'use strict';

const Label = require('./Label');

const Exemplar = class Exemplar {
    constructor() {
        this.value = 0; // double | required
        this.timestamp = 0; // int64 | optional
        this.label = []; // Label | optional??
    }
};

module.exports = Exemplar;
