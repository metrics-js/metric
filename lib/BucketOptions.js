'use strict';

const Linear = require('./Linear');
const Exponential = require('./Exponential');
const Explicit = require('./Explicit');

const BucketOptions = class BucketOptions {
    constructor() {
        this.options = {
            linear_buckets: {}, // Linear
            exponential_buckets: {}, // Exponential
            explicit_buckets: {}, // Explicit
        };  // oneof | required
    }
};

module.exports = BucketOptions;
