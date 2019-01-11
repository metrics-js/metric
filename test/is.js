'use strict';

const tap = require('tap');
const is = require('../lib/is');

tap.test('is.validName() - has chars in the specter of [a-zA-Z_][a-zA-Z0-9_]* - should return true', (t) => {
    const result = is.validName('abc_def_G_01');
    t.true(result);
    t.end();
});

tap.test('is.validName() - value is just a number - should return false', (t) => {
    const result = is.validName('10');
    t.false(result);
    t.end();
});

tap.test('is.validType() - value is 0 - should return true', (t) => {
    const result = is.validType(0);
    t.true(result);
    t.end();
});

tap.test('is.validType() - value is within the range of 0 and 7 - should return true', (t) => {
    const result = is.validType(5);
    t.true(result);
    t.end();
});

tap.test('is.validType() - value is 7 - should return true', (t) => {
    const result = is.validType(7);
    t.true(result);
    t.end();
});

tap.test('is.validType() - value is lower than 0 - should return false', (t) => {
    const result = is.validType(-1);
    t.false(result);
    t.end();
});

tap.test('is.validType() - value is higher than 7 - should return false', (t) => {
    const result = is.validType(8);
    t.false(result);
    t.end();
});

