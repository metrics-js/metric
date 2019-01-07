'use strict';

const Quantile = require('./Quantile');

const SummaryValue = class SummaryValue {
    constructor({sum = null, count = null} = {}) {
        this._sum = sum; // double | optional
        this._count = count; // int64 | optional
        this._quantile = []; // Quantile | repeated
    }

    set sum(value) {
        this._sum = value;
    }

    get sum() {
        return this._sum;
    }

    set count(value) {
        this._count = value;
    }

    get count() {
        return this._count;
    }

    set quantile(value) {
        if(!(value instanceof Quantile)) throw TypeError('"value" is not a instance of the Quantile class');
        this._quantile.push(value);
    }

    get quantile() {
        return this._quantile;
    }

    toJSON() {
        return {
            _class: 'SummaryValue',
            sum: this.sum,
            count: this.count,
            quantile: this.quantile,
        };
    }
};

module.exports = SummaryValue;
