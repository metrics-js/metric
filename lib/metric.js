'use strict';

const assert = require('assert');
const util = require('util');
const is = require('./is');

const _description = Symbol('metric:key:description');
const _timestamp = Symbol('metric:key:timestamp');
const _source = Symbol('metric:key:source');
const _value = Symbol('metric:key:value');
const _time = Symbol('metric:key:time');
const _meta = Symbol('metric:key:meta');
const _type = Symbol('metric:key:type');
const _name = Symbol('metric:key:name');

const Metric = class Metric {
    constructor({
        name = null,
        description = undefined,
        timestamp = undefined,
        type = 0,
        source = null,
        value = null,
        time = null,
        meta = {},
    } = {}) {
        assert(is.validName(name), '"name" contain illegal character(s)');
        assert(is.validType(type), '"type" must be a Number between 0 and 7');

        Object.defineProperty(this, _name, {
            value: name,
        });

        Object.defineProperty(this, _description, {
            value: description,
        });

        Object.defineProperty(this, _timestamp, {
            value: timestamp,
        });

        Object.defineProperty(this, _source, {
            writable: true,
            value: is.notEmpty(source) ? source : null,
        });

        Object.defineProperty(this, _type, {
            value: type,
        });

        Object.defineProperty(this, _value, {
            value: is.notEmpty(value) ? value : null,
        });

        Object.defineProperty(this, _time, {
            value: time,
        });

        Object.defineProperty(this, _meta, {
            value: meta,
        });
    }

    get source() {
        return this[_source];
    }

    set source(value) {
        this[_source] = value;
    }

    get type() {
        return this[_type];
    }

    get name() {
        return this[_name];
    }

    get description() {
        return this[_description];
    }

    get timestamp() {
        return this[_timestamp];
    }

    get value() {
        return this[_value];
    }

    get time() {
        return this[_time];
    }

    get meta() {
        return this[_meta];
    }

    toJSON() {
        return {
            name: this.name,
            description: this.description,
            timestamp: this.timestamp,
            type: this.type,
            value: this.value,
            time: this.time,
            meta: this.meta,
        };
    }

    [util.inspect.custom](depth, options) {
        return `Metric ${util.inspect(this.toJSON(), depth, options)}`;
    }

    [Symbol.toPrimitive](hint) {
        if (hint === 'string') return `Metric ${JSON.stringify(this)}`;
        throw new Error(
            `Invalid usage. Metric class instance cannot be treated as type "${hint}"`,
        );
    }

    get [Symbol.toStringTag]() {
        return 'Metric';
    }
};

module.exports = Metric;
