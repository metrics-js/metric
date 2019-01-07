'use strict';

const State = require('./State');

const StateSetValue = class StateSetValue {
    constructor() {
        this.states = [];  // State | required
    }
};

module.exports = StateSetValue;
