"use strict";

const util = require("util");
const is = require("./is");

const _description = Symbol("metric:key:description");
const _timestamp = Symbol("metric:key:timestamp");
const _source = Symbol("metric:key:source");
const _labels = Symbol("metric:key:labels");
const _value = Symbol("metric:key:value");
const _time = Symbol("metric:key:time");
const _meta = Symbol("metric:key:meta");
const _type = Symbol("metric:key:type");
const _name = Symbol("metric:key:name");

const Metric = class Metric {
	constructor({
		description,
		timestamp = null,
		source = null,
		labels = [],
		value = null,
		time = null,
		meta = {},
		type = 0,
		name,
	} = {}) {
		// Required arguments
		if (!name) throw new Error('The argument "name" must be provided');
		if (!description) throw new Error('The argument "description" must be provided');

		// Validation
		if (!is.validDescription(description))
			throw new Error(`Argument "description" must be a string, was '${typeof description}'`);
		if (!is.validTimestamp(timestamp))
			throw new Error(`Argument "timestamp" must be a finite number, was '${timestamp}'`);
		if (!is.validSource(source)) throw new Error(`Argument "source" must be a string, was '${typeof source}'`);
		if (!is.validLabels(labels))
			throw new Error(
				`Argument "label" must be an Array of valid label objects, was '${labels}. See https://metrics-js.github.io/reference/metric/#name-1'`,
			);
		if (!is.validValue(value)) throw new Error(`Argument "value" must be a finite number, was '${value}'`);
		if (!is.validType(type)) throw new Error(`Argument "type" must be between 0 and 7, was '${type}'`);
		if (!is.validName(name))
			throw new Error(
				`Argument "name" must be a valid OpenMetrics name, was '${name}'. See https://metrics-js.github.io/reference/metric/#name`,
			);

		// Private properties
		this[_description] = description;
		this[_timestamp] = timestamp || Date.now() / 1000;
		this[_source] = is.notEmpty(source) ? source : null;
		this[_labels] = labels;
		this[_value] = is.notEmpty(value) ? value : null;
		this[_meta] = meta;
		this[_type] = type;
		this[_name] = name;

		// Deprecated
		this[_time] = is.notEmpty(time) ? time : null;
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

	get labels() {
		return this[_labels];
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
			labels: this.labels,
			time: this.time,
			meta: this.meta,
		};
	}

	[util.inspect.custom](depth, options) {
		return `Metric ${util.inspect(this.toJSON(), depth, options)}`;
	}

	[Symbol.toPrimitive](hint) {
		if (hint === "string") return `Metric ${JSON.stringify(this)}`;
		throw new Error(`Invalid usage. Metric class instance cannot be treated as type "${hint}"`);
	}

	get [Symbol.toStringTag]() {
		return "Metric";
	}
};

module.exports = Metric;
