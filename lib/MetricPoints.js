'use strict';

const MetricDescriptor = require('./MetricDescriptor');
const Timeseries = require('./Timeseries');

const MetricPoints = class MetricPoints {
    constructor() {
        this.metric_descriptor = '';  // MetricDescriptor | required
        this.timeseries = [];  // Timeseries | repeated
    }
};

module.exports = MetricPoints;
