'use strict';

const Linear = class Linear {
    constructor() {
        this.num_explicit_buckets = 0;  // int32 | required
        this.width = 0; // double | required
        this.offset = 0; // double | required
    }
};

module.exports = Linear;
