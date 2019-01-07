'use strict';

const Exponential = class Exponential {
    constructor() {
        this.num_exponential_buckets = 0;  // int32 | required
        this.growth_factor = 1; // double | required
        this.scale = 0; // double | required
    }
};

module.exports = Exponential;
