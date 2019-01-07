'use strict';

const Quantile = class Quantile {
    constructor(quantile, value) {

        // double | required
        Object.defineProperty(this, '_quantile', {
            writable: true,
            value: null,
        });

        // double | required
        Object.defineProperty(this, '_value', {
            writable: true,
            value: null,
        });

        // Set required properties
        this.quantile = quantile;
        this.value = value;
    }

    set quantile(value) {
        if(!Number.isFinite(value)) throw TypeError('Value for "quantile" must be of type Double');
        this._quantile = value;
    }

    get quantile() {
        return this._quantile;
    }

    set value(value) {
        if(!Number.isFinite(value)) throw TypeError('Value for "value" must be of type Double');
        this._value = value;
    }

    get value() {
        return this._value;
    }

    toJSON() {
        return {
            _class: 'Quantile',
            quantile: this.quantile,
            value: this.value,
        };
    }
};

module.exports = Quantile;
