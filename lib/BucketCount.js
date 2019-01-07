'use strict';

const Exemplar = require('./Exemplar');

const BucketCount = class BucketCount {
    constructor() {
        this.count = 0;  // int64 | required
        this.exemplar = {}; // Exemplar | optional
    }
};

module.exports = BucketCount;
