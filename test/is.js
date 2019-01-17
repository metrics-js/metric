'use strict';

const tap = require('tap');
const is = require('../lib/is');

tap.test('is.isString() - is a String - should return true', (t) => {
    t.true(is.isString('aa'));
    t.true(is.isString(''));
    t.true(is.isString('10'));
    t.true(is.isString('true'));
    t.true(is.isString('[1]'));
    t.end();
});

tap.test('is.isString() - not a String - should return false', (t) => {
    t.false(is.isString(NaN));
    t.false(is.isString(10));
    t.false(is.isString({ foo: 1 }));
    t.false(is.isString(true));
    t.false(is.isString([1]));
    t.end();
});

tap.test('is.isEmptyString() - is a empty String - should return true', (t) => {
    t.true(is.isEmptyString(''));
    t.true(is.isEmptyString('  ')); // spaces
    t.true(is.isEmptyString('   ')); // tab
    t.true(is.isEmptyString('\n')); // newline
    t.end();
});

tap.test('is.isEmptyString() - not an empty String - should return false', (t) => {
    t.false(is.isEmptyString('a'));
    t.false(is.isEmptyString('  a    '));
    t.end();
});

tap.test('is.notEmpty() - is not empty - should return true', (t) => {
    t.true(is.notEmpty('a'));
    t.true(is.notEmpty('undefined'));
    t.true(is.notEmpty('  a    '));
    t.true(is.notEmpty('null'));
    t.end();
});

tap.test('is.notEmpty() - is empty - should return false', (t) => {
    t.false(is.notEmpty());
    t.false(is.notEmpty(undefined));
    t.false(is.notEmpty(null));
    t.false(is.notEmpty(''));
    t.false(is.notEmpty('  ')); // spaces
    t.false(is.notEmpty('   ')); // tab
    t.false(is.notEmpty('\n')); // newline
    t.end();
});

tap.test('is.validName() - has chars in the specter of [a-zA-Z_][a-zA-Z0-9_]* - should return true', (t) => {
    t.true(is.validName('abc_def_G_01'));
    t.end();
});

tap.test('is.validName() - value is just a number - should return false', (t) => {
    t.false(is.validName('10'));
    t.end();
});

tap.test('is.validType() - value is 0 - should return true', (t) => {
    t.true(is.validType(0));
    t.end();
});

tap.test('is.validType() - value is within the range of 0 and 7 - should return true', (t) => {
    t.true(is.validType(5));
    t.end();
});

tap.test('is.validType() - value is 7 - should return true', (t) => {
    t.true(is.validType(7));
    t.end();
});

tap.test('is.validType() - value is lower than 0 - should return false', (t) => {
    t.false(is.validType(-1));
    t.end();
});

tap.test('is.validType() - value is higher than 7 - should return false', (t) => {
    t.false(is.validType(8));
    t.end();
});

tap.test('is.validDescription() - value is a String - should return true', (t) => {
    t.true(is.validDescription('foo'));
    t.end();
});

tap.test('is.validDescription() - value is "null" - should return true', (t) => {
    t.true(is.validDescription(null));
    t.end();
});

tap.test('is.validDescription() - value is "undefined" - should return true', (t) => {
    t.true(is.validDescription(undefined));
    t.end();
});

tap.test('is.validDescription() - value is a Number - should return false', (t) => {
    t.false(is.validDescription(10));
    t.end();
});

tap.test('is.validSource() - value is a String - should return true', (t) => {
    t.true(is.validSource('foo'));
    t.end();
});

tap.test('is.validSource() - value is "null" - should return true', (t) => {
    t.true(is.validSource(null));
    t.end();
});

tap.test('is.validSource() - value is "undefined" - should return true', (t) => {
    t.true(is.validSource(undefined));
    t.end();
});

tap.test('is.validSource() - value is a Number - should return false', (t) => {
    t.false(is.validSource(10));
    t.end();
});

tap.test('is.validTimestamp() - value is a Integer - should return true', (t) => {
    t.true(is.validTimestamp(10));
    t.end();
});

tap.test('is.validTimestamp() - value is a Double - should return true', (t) => {
    t.true(is.validTimestamp(10.4));
    t.end();
});

tap.test('is.validTimestamp() - value is "null" - should return true', (t) => {
    t.true(is.validTimestamp(null));
    t.end();
});

tap.test('is.validTimestamp() - value is "undefined" - should return true', (t) => {
    t.true(is.validTimestamp(undefined));
    t.end();
});

tap.test('is.validTimestamp() - value is a String - should return false', (t) => {
    t.false(is.validTimestamp('foo'));
    t.end();
});

tap.test('is.validValue() - value is a Integer - should return true', (t) => {
    t.true(is.validValue(0));
    t.true(is.validValue(10));
    t.end();
});

tap.test('is.validValue() - value is a Double - should return true', (t) => {
    t.true(is.validValue(0.0234));
    t.true(is.validValue(10.4));
    t.end();
});

tap.test('is.validValue() - value is "null" - should return true', (t) => {
    t.true(is.validValue(null));
    t.end();
});

tap.test('is.validValue() - value is "undefined" - should return true', (t) => {
    t.true(is.validValue(undefined));
    t.end();
});

tap.test('is.validValue() - value is a String - should return false', (t) => {
    t.false(is.validValue('foo'));
    t.end();
});

tap.test('is.validLabel() - value is legal - should return true', (t) => {
    t.true(is.validLabel({ name: 'foo', value: 10 }));
    t.end();
});

tap.test('is.validLabelValue() - value is a Integer - should return true', (t) => {
    t.true(is.validLabelValue(0));
    t.true(is.validLabelValue(10));
    t.end();
});

tap.test('is.validLabelValue() - value is a Double - should return true', (t) => {
    t.true(is.validLabelValue(0.0234));
    t.true(is.validLabelValue(10.4));
    t.end();
});

tap.test('is.validLabelValue() - value is "null" - should return true', (t) => {
    t.true(is.validLabelValue(null));
    t.end();
});

tap.test('is.validLabelValue() - value is "undefined" - should return true', (t) => {
    t.true(is.validLabelValue(undefined));
    t.end();
});

tap.test('is.validLabelValue() - value is a String - should return true', (t) => {
    t.true(is.validLabelValue('foo'));
    t.end();
});

tap.test('is.validLabelValue() - value is illegal - should return false', (t) => {
    t.false(is.validLabelValue(['foo']));
    t.end();
});

tap.test('is.validLabel() - not a label object - should return false', (t) => {
    t.false(is.validLabel({ bar: 'a' }));
    t.false(is.validLabel({ name: 'a', bar: 'a' }));
    t.false(is.validLabel({ value: 'a', bar: 'a' }));
    t.end();
});

tap.test('is.validLabel() - value of "name" property is illegal - should return false', (t) => {
    t.false(is.validLabel({ name: '1 foo_', value: 10 }));
    t.end();
});

tap.test('is.validLabel() - value of "value" property is illegal - should return false', (t) => {
    t.false(is.validLabel({ name: 'foo', value: ['bar'] }));
    t.end();
});

tap.test('is.validLabels() - value is Array with legal objects - should return true', (t) => {
    t.true(is.validLabels([{ name: 'bar', value: 5 }, { name: 'foo', value: 10 }]));
    t.true(is.validLabels([{ name: 'bar', value: 1.4 }, { name: 'foo', value: 0.234 }]));
    t.true(is.validLabels([{ name: 'bar', value: 'foo' }, { name: 'foo', value: 'bar' }]));
    t.end();
});

tap.test('is.validLabels() - value is empty Array - should return true', (t) => {
    t.true(is.validLabels([]));
    t.end();
});

tap.test('is.validLabels() - value is not an Array - should return false', (t) => {
    t.false(is.validLabels('foo'));
    t.end();
});

tap.test('is.validLabels() - value is Array with some ilegal objects - should return false', (t) => {
    t.false(is.validLabels([{ name: 'bar', value: 5 }, { name: 'xyz', value: 'a' }, { name: 'foo', value: 10 }, 'foo']));
    t.end();
});
