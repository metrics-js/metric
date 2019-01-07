'use strict';

const BucketOptions = require('./BucketOptions');

const HistogramValue = class HistogramValue {
    constructor() {
        this.sum = 0;  // double | required
        this.count = 0;  // int64 | required
        this.bucket_options = {} // BucketOptions | required
    }
};

module.exports = HistogramValue;
