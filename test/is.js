"use strict";

const tap = require("tap");
const is = require("../lib/is");

tap.test("is.isString() - is a String - should return true", (t) => {
	t.ok(is.isString("aa"));
	t.ok(is.isString(""));
	t.ok(is.isString("10"));
	t.ok(is.isString("true"));
	t.ok(is.isString("[1]"));
	t.end();
});

tap.test("is.isString() - not a String - should return false", (t) => {
	t.notOk(is.isString(NaN));
	t.notOk(is.isString(10));
	t.notOk(is.isString({ foo: 1 }));
	t.notOk(is.isString(true));
	t.notOk(is.isString([1]));
	t.end();
});

tap.test("is.isEmptyString() - is a empty String - should return true", (t) => {
	t.ok(is.isEmptyString(""));
	t.ok(is.isEmptyString("  ")); // spaces
	t.ok(is.isEmptyString("   ")); // tab
	t.ok(is.isEmptyString("\n")); // newline
	t.end();
});

tap.test("is.isEmptyString() - not an empty String - should return false", (t) => {
	t.notOk(is.isEmptyString("a"));
	t.notOk(is.isEmptyString("  a    "));
	t.end();
});

tap.test("is.notEmpty() - is not empty - should return true", (t) => {
	t.ok(is.notEmpty("a"));
	t.ok(is.notEmpty("undefined"));
	t.ok(is.notEmpty("  a    "));
	t.ok(is.notEmpty("null"));
	t.end();
});

tap.test("is.notEmpty() - is empty - should return false", (t) => {
	t.notOk(is.notEmpty());
	t.notOk(is.notEmpty(undefined));
	t.notOk(is.notEmpty(null));
	t.notOk(is.notEmpty(""));
	t.notOk(is.notEmpty("  ")); // spaces
	t.notOk(is.notEmpty("   ")); // tab
	t.notOk(is.notEmpty("\n")); // newline
	t.end();
});

tap.test("is.validName() - has chars in the specter of [a-zA-Z_][a-zA-Z0-9_]* - should return true", (t) => {
	t.ok(is.validName("abc_def_G_01"));
	t.end();
});

tap.test("is.validName() - value is just a number - should return false", (t) => {
	t.notOk(is.validName("10"));
	t.end();
});

tap.test("is.validType() - value is 0 - should return true", (t) => {
	t.ok(is.validType(0));
	t.end();
});

tap.test("is.validType() - value is within the range of 0 and 7 - should return true", (t) => {
	t.ok(is.validType(5));
	t.end();
});

tap.test("is.validType() - value is 7 - should return true", (t) => {
	t.ok(is.validType(7));
	t.end();
});

tap.test("is.validType() - value is lower than 0 - should return false", (t) => {
	t.notOk(is.validType(-1));
	t.end();
});

tap.test("is.validType() - value is higher than 7 - should return false", (t) => {
	t.notOk(is.validType(8));
	t.end();
});

tap.test("is.validDescription() - value is a String - should return true", (t) => {
	t.ok(is.validDescription("foo"));
	t.end();
});

tap.test('is.validDescription() - value is "null" - should return true', (t) => {
	t.ok(is.validDescription(null));
	t.end();
});

tap.test('is.validDescription() - value is "undefined" - should return true', (t) => {
	t.ok(is.validDescription(undefined));
	t.end();
});

tap.test("is.validDescription() - value is a Number - should return false", (t) => {
	t.notOk(is.validDescription(10));
	t.end();
});

tap.test("is.validSource() - value is a String - should return true", (t) => {
	t.ok(is.validSource("foo"));
	t.end();
});

tap.test('is.validSource() - value is "null" - should return true', (t) => {
	t.ok(is.validSource(null));
	t.end();
});

tap.test('is.validSource() - value is "undefined" - should return true', (t) => {
	t.ok(is.validSource(undefined));
	t.end();
});

tap.test("is.validSource() - value is a Number - should return false", (t) => {
	t.notOk(is.validSource(10));
	t.end();
});

tap.test("is.validTimestamp() - value is a Integer - should return true", (t) => {
	t.ok(is.validTimestamp(10));
	t.end();
});

tap.test("is.validTimestamp() - value is a Double - should return true", (t) => {
	t.ok(is.validTimestamp(10.4));
	t.end();
});

tap.test('is.validTimestamp() - value is "null" - should return true', (t) => {
	t.ok(is.validTimestamp(null));
	t.end();
});

tap.test('is.validTimestamp() - value is "undefined" - should return true', (t) => {
	t.ok(is.validTimestamp(undefined));
	t.end();
});

tap.test("is.validTimestamp() - value is a String - should return false", (t) => {
	t.notOk(is.validTimestamp("foo"));
	t.end();
});

tap.test("is.validValue() - value is a Integer - should return true", (t) => {
	t.ok(is.validValue(0));
	t.ok(is.validValue(10));
	t.end();
});

tap.test("is.validValue() - value is a Double - should return true", (t) => {
	t.ok(is.validValue(0.0234));
	t.ok(is.validValue(10.4));
	t.end();
});

tap.test('is.validValue() - value is "null" - should return true', (t) => {
	t.ok(is.validValue(null));
	t.end();
});

tap.test('is.validValue() - value is "undefined" - should return true', (t) => {
	t.ok(is.validValue(undefined));
	t.end();
});

tap.test("is.validValue() - value is a String - should return false", (t) => {
	t.notOk(is.validValue("foo"));
	t.end();
});

tap.test("is.validLabel() - value is legal - should return true", (t) => {
	t.ok(is.validLabel({ name: "foo", value: 10 }));
	t.end();
});

tap.test("is.validLabelValue() - value is a Integer - should return true", (t) => {
	t.ok(is.validLabelValue(0));
	t.ok(is.validLabelValue(10));
	t.end();
});

tap.test("is.validLabelValue() - value is a Double - should return true", (t) => {
	t.ok(is.validLabelValue(0.0234));
	t.ok(is.validLabelValue(10.4));
	t.end();
});

tap.test('is.validLabelValue() - value is "null" - should return true', (t) => {
	t.ok(is.validLabelValue(null));
	t.end();
});

tap.test('is.validLabelValue() - value is "undefined" - should return true', (t) => {
	t.ok(is.validLabelValue(undefined));
	t.end();
});

tap.test("is.validLabelValue() - value is a String - should return true", (t) => {
	t.ok(is.validLabelValue("foo"));
	t.end();
});

tap.test("is.validLabelValue() - value is a Boolean - should return true", (t) => {
	t.ok(is.validLabelValue(false));
	t.ok(is.validLabelValue(true));
	t.end();
});

tap.test("is.validLabelValue() - value is illegal - should return false", (t) => {
	t.notOk(is.validLabelValue(["foo"]));
	t.end();
});

tap.test("is.validLabel() - not a label object - should return false", (t) => {
	t.notOk(is.validLabel({ bar: "a" }));
	t.notOk(is.validLabel({ name: "a", bar: "a" }));
	t.notOk(is.validLabel({ value: "a", bar: "a" }));
	t.end();
});

tap.test('is.validLabel() - value of "name" property is illegal - should return false', (t) => {
	t.notOk(is.validLabel({ name: "1 foo_", value: 10 }));
	t.end();
});

tap.test('is.validLabel() - value of "value" property is illegal - should return false', (t) => {
	t.notOk(is.validLabel({ name: "foo", value: ["bar"] }));
	t.end();
});

tap.test("is.validLabels() - value is Array with legal objects - should return true", (t) => {
	t.ok(
		is.validLabels([
			{ name: "bar", value: 5 },
			{ name: "foo", value: 10 },
		]),
	);
	t.ok(
		is.validLabels([
			{ name: "bar", value: 1.4 },
			{ name: "foo", value: 0.234 },
		]),
	);
	t.ok(
		is.validLabels([
			{ name: "bar", value: "foo" },
			{ name: "foo", value: "bar" },
		]),
	);
	t.ok(
		is.validLabels([
			{ name: "bar", value: null },
			{ name: "foo", value: 0 },
		]),
	);
	t.end();
});

tap.test("is.validLabels() - value is empty Array - should return true", (t) => {
	t.ok(is.validLabels([]));
	t.end();
});

tap.test("is.validLabels() - value is not an Array - should return false", (t) => {
	t.notOk(is.validLabels("foo"));
	t.end();
});

tap.test("is.validLabels() - value is Array with some ilegal objects - should return false", (t) => {
	t.notOk(is.validLabels([{ name: "bar", value: 5 }, { name: "xyz", value: "a" }, { name: "foo", value: 10 }, "foo"]));
	t.end();
});
