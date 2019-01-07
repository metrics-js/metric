'use strict';

const Type = require('./Type');

const MetricDescriptor = class MetricDescriptor {
    constructor() {
        this.name = '';  // String | required
        this.unit = [];  // String | optional
        this.type = 0;   // Type | required
        this.description = '';  // String | optional
    }
};

module.exports = MetricDescriptor;
