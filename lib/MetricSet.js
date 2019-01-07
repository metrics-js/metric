'use strict';

const MetricPoints = require('./MetricPoints');

const MetricSet = class MetricSet {
    constructor() {
        this.metric_points = [];  // MetricPoints | repeated
    }
};

module.exports = MetricSet;
