'use strict';

const util = require('util');
const tap = require('tap');
const Metric = require('../lib/metric');

tap.test('Metric() - object type - should be Metric', (t) => {
    const metric = new Metric();
    t.equal(Object.prototype.toString.call(metric), '[object Metric]');
    t.end();
});

tap.test('set and get value of source', (t) => {
    const metric = new Metric({
        name: 'valid_name',
        description: 'Valid description',
        timestamp: 12345,
    });
    metric.source = 'foo';
    t.equal(metric.source, 'foo');
    t.end();
});

tap.test('optional values return null when not provided', (t) => {
    const metric = new Metric({
        name: 'valid_name',
        description: 'Valid description',
        timestamp: 12345,
    });
    t.equal(metric.value, null);
    t.equal(metric.time, null);
    t.same(metric.meta, {});
    t.end();
});

tap.test('stringifying includes all keys', (t) => {
    const metric = new Metric({
        name: 'valid_name',
        description: 'Valid description',
        timestamp: 12345,
    });
    t.equal(
        `${metric}`,
        'Metric {"name":"valid_name","description":"Valid description","timestamp":12345,"type":0,"value":null,"time":null,"meta":{}}',
    );
    t.end();
});

tap.test('omitting required keys results in undefined instead of "null"', (t) => {
    const metric = new Metric({
        name: 'valid_name',
    });
    t.equal(metric.name, 'valid_name');
    t.equal(metric.description, undefined);
    t.equal(metric.timestamp, undefined);
    t.equal(metric.type, 0);
    t.equal(metric.time, null);
    t.equal(metric.value, null);
    t.same(metric.meta, {});
    t.end();
});

tap.test('the number 0 is treated as a number and does not yeld "null"', (t) => {
    const metric = new Metric({
        name: 'valid_name',
        value: 0,
        type: 0,
        timestamp: 0,
    });
    t.equal(metric.timestamp, 0);
    t.equal(metric.type, 0);
    t.equal(metric.value, 0);
    t.end();
});

tap.test('empty string value is treated as "null"', (t) => {
    const metric = new Metric({
        name: 'valid_name',
        value: '',
    });
    t.equal(metric.value, null);
    t.end();
});

tap.test(
    'empty string value, consist of multiple whitespaces, is treated as "null"',
    (t) => {
        const metric = new Metric({
            name: 'valid_name',
            value: '   ',
        });
        t.equal(metric.value, null);
        t.end();
    },
);

tap.test('util.inspect includes all keys', (t) => {
    const metric = new Metric({
        name: 'valid_name',
        description: 'Valid description',
        timestamp: 12345,
        time: 12345,
        value: 123,
        meta: { key: 'value' },
    });

    const result = `Metric { name: 'valid_name',
  description: 'Valid description',
  timestamp: 12345,
  type: 0,
  value: 123,
  time: 12345,
  meta: { key: 'value' } }`;

    t.equal(util.inspect(metric), result);
    t.end();
});

tap.test('toStringTag includes Metric in name', (t) => {
    const metric = new Metric({
        name: 'valid_name',
        description: 'Valid description',
        timestamp: 12345,
    });
    t.equal(`${metric}`, `Metric ${JSON.stringify(metric)}`);
    t.end();
});

tap.test('toString outputs a full stringified object', (t) => {
    const metric = new Metric({
        name: 'valid_name',
        description: 'Valid description',
        timestamp: 12345,
    });
    t.equal(metric.toString(), '[object Metric]');
    t.end();
});

tap.test('parseInt on metric instance outputs null', (t) => {
    const metric = new Metric({
        name: 'valid_name',
        description: 'Valid description',
        timestamp: 12345,
    });

    t.throws(() => {
        const foo = metric + 1; // eslint-disable-line no-unused-vars
    }, new Error('Invalid usage. Metric class instance cannot be treated as type "default"'));
    t.end();
});
