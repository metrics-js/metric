'use strict';

const StateSetValue = require('./StateSetValue');
const HistrogramValue = require('./HistogramValue');
const SumaryValue = require('./SummaryValue');
const InfoValue = require('./InfoValue');

const Point = class Point {
    constructor() {
        this.value = {
            double_value: 0, // double
            int_value: 0, // int64
            state_set_value: {}, // StateSetValue
            histogram_value: {}, // HistrogramValue
            sumary_value: {}, // SumaryValue
            info_value: {}, // InfoValue
        };  // oneof | required

        this.start_timestamp = 0;  // int64 | optional
        this.timestamp = 0;  // int64 | optional
    }
};

module.exports = Point;
