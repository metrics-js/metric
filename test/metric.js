'use strict';

const util = require('util');
const tap = require('tap');
const lolex = require('lolex');
const Metric = require('../lib/metric');

tap.test('Metric() - object type - should be Metric', (t) => {
    const metric = new Metric({ name: 'foo', description: 'bar' });
    t.equal(Object.prototype.toString.call(metric), '[object Metric]');
    t.end();
});

tap.test('Metric() - No arguments - should throw', (t) => {
    t.plan(1);
    t.throws(() => {
        const metric = new Metric(); // eslint-disable-line no-unused-vars
    }, /The argument "name" must be provided/);
    t.end();
});

tap.test('Metric() - "name" argument is not provided - should throw', (t) => {
    t.plan(1);
    t.throws(() => {
        const metric = new Metric({ description: 'bar' }); // eslint-disable-line no-unused-vars
    }, /The argument "name" must be provided/);
    t.end();
});

tap.test('Metric() - "description" argument is not provided - should throw', (t) => {
    t.plan(1);
    t.throws(() => {
        const metric = new Metric({ name: 'bar' }); // eslint-disable-line no-unused-vars
    }, /The argument "description" must be provided/);
    t.end();
});

tap.test('Metric() - "name" argument is not valid - should throw', (t) => {
    t.plan(1);
    t.throws(() => {
        const metric = new Metric({ name: '10', description: 'bar' }); // eslint-disable-line no-unused-vars
    }, /Provided value to argument "name" is not legal/);
    t.end();
});

tap.test('Metric() - "timestamp" argument is not valid - should throw', (t) => {
    t.plan(1);
    t.throws(() => {
        const metric = new Metric({ name: 'foo', description: 'bar', timestamp: '10' }); // eslint-disable-line no-unused-vars
    }, /Provided value to argument "timestamp" is not legal/);
    t.end();
});

tap.test('Metric() - "description" argument is not valid - should throw', (t) => {
    t.plan(1);
    t.throws(() => {
        const metric = new Metric({ name: 'foo', description: 10, }); // eslint-disable-line no-unused-vars
    }, /Provided value to argument "description" is not legal/);
    t.end();
});

tap.test('Metric() - "source" argument is not valid - should throw', (t) => {
    t.plan(1);
    t.throws(() => {
        const metric = new Metric({ name: 'foo', description: 'bar', source: 10 }); // eslint-disable-line no-unused-vars
    }, /Provided value to argument "source" is not legal/);
    t.end();
});

tap.test('Metric() - "type" argument is not valid - should throw', (t) => {
    t.plan(1);
    t.throws(() => {
        const metric = new Metric({ name: 'foo', description: 'bar', type: '10' }); // eslint-disable-line no-unused-vars
    }, /Provided value to argument "type" is not legal/);
    t.end();
});

tap.test('Metric() - "value" argument is not valid - should throw', (t) => {
    t.plan(1);
    t.throws(() => {
        const metric = new Metric({ name: 'foo', description: 'bar', value: '10' }); // eslint-disable-line no-unused-vars
    }, /Provided value to argument "value" is not legal/);
    t.end();
});

tap.test('Metric() - only required arguments is set - should set defaults on optional arguments', (t) => {
    const clock = lolex.install();
    clock.tick(1547507561724);

    const metric = new Metric({
        name: 'valid_name',
        description: 'Valid description',
    });

    t.equal(metric.timestamp, (1547507561724 / 1000));
    t.equal(metric.type, 0);
    t.same(metric.labels, []);
    t.equal(metric.source, null);
    t.same(metric.meta, {});

    clock.uninstall();

    t.end();
});

tap.test('Metric() - all arguments is set - should set on respectative property', (t) => {
    const metric = new Metric({
        description: 'Valid description',
        timestamp: 1547507561724,
        source: 'valid_source',
        labels: [{ name: 'foo', value: 5 }],
        value: 10,
        meta: 'valid_meta',
        type: 2,
        name: 'valid_name',
    });

    t.equal(metric.description, 'Valid description');
    t.equal(metric.timestamp, 1547507561724);
    t.equal(metric.source, 'valid_source');
    t.same(metric.labels, [{ name: 'foo', value: 5 }]);
    t.equal(metric.value, 10);
    t.equal(metric.type, 2);
    t.equal(metric.meta, 'valid_meta');
    t.equal(metric.name, 'valid_name');

    t.end();
});

tap.test('Metric.toJSON() - only required arguments is set - should contain all properties with defaults', (t) => {
    const clock = lolex.install();
    clock.tick(1547507561724);

    const metric = new Metric({
        name: 'valid_name',
        description: 'Valid description',
    });

    const serialized = metric.toJSON();

    t.equal(serialized.description, 'Valid description');
    t.equal(serialized.timestamp, (1547507561724 / 1000));
    //    t.equal(serialized.source, null);
    t.same(serialized.labels, []);
    t.equal(serialized.value, null);
    t.equal(serialized.type, 0);
    t.same(serialized.meta, {});
    t.equal(metric.name, 'valid_name');

    clock.uninstall();

    t.end();
});

tap.test('Metric.toJSON() - all arguments is set - should contain all properties with set values', (t) => {
    const metric = new Metric({
        description: 'Valid description',
        timestamp: 1547507561724,
        source: 'valid_source',
        labels: [{ name: 'foo', value: 5 }],
        value: 10,
        meta: 'valid_meta',
        type: 2,
        name: 'valid_name',
    });

    const serialized = metric.toJSON();

    t.equal(serialized.description, 'Valid description');
    t.equal(serialized.timestamp, 1547507561724);
    //    t.equal(serialized.source, 'valid_source');
    t.same(serialized.labels, [{ name: 'foo', value: 5 }]);
    t.equal(serialized.value, 10);
    t.equal(serialized.type, 2);
    t.equal(serialized.meta, 'valid_meta');
    t.equal(serialized.name, 'valid_name');

    t.end();
});


tap.test('Metric.toPrimitive() - stringify - should includes all keys', (t) => {
    const metric = new Metric({
        name: 'valid_name',
        description: 'Valid description',
        timestamp: 12345,
    });
    t.equal(
        `${metric}`,
        'Metric {"name":"valid_name","description":"Valid description","timestamp":12345,"type":0,"value":null,"labels":[],"meta":{}}',
    );
    t.end();
});

tap.test('Metric.toPrimitive() - stringify - should include "Metric" in name', (t) => {
    const metric = new Metric({
        name: 'valid_name',
        description: 'Valid description',
        timestamp: 12345,
    });
    t.equal(`${metric}`, `Metric ${JSON.stringify(metric)}`);
    t.end();
});

tap.test('Metric.toPrimitive() - defaults - should throw', (t) => {
    t.plan(1);

    const metric = new Metric({
        name: 'valid_name',
        description: 'Valid description',
        timestamp: 12345,
    });

    t.throws(() => {
        const foo = metric + 1; // eslint-disable-line no-unused-vars
    }, /Invalid usage. Metric class instance cannot be treated as type "default"/);
    t.end();
});

tap.test('Metric() - util.inspect - should includes all keys', (t) => {
    const metric = new Metric({
        name: 'valid_name',
        description: 'Valid description',
        timestamp: 12345,
        value: 123,
        meta: { key: 'value' },
    });

    const result = `Metric { name: 'valid_name',
  description: 'Valid description',
  timestamp: 12345,
  type: 0,
  value: 123,
  labels: [],
  time: undefined,
  meta: { key: 'value' } }`;

    t.equal(util.inspect(metric), result);
    t.end();
});

tap.test('Metric() - 0 values - should treat the number 0 as a number and not yeld "null"', (t) => {
    const metric = new Metric({
        name: 'valid_name',
        description: 'Valid description',
        value: 0,
        type: 0,
    });
    t.equal(metric.type, 0);
    t.equal(metric.value, 0);
    t.end();
});

tap.test('Metric() - empty string - should be treated as "null"', (t) => {
    const metric = new Metric({
        name: 'valid_name',
        description: 'Valid description',
        source: '',
    });
    t.equal(metric.source, null);
    t.end();
});

tap.test(
    'Metric() - empty string, consist of multiple whitespaces - should be treated as "null"',
    (t) => {
        const metric = new Metric({
            name: 'valid_name',
            description: 'Valid description',
            source: '     ',
        });
        t.equal(metric.source, null);
        t.end();
    },
);

tap.test('Metric.source - set value - should set the value', (t) => {
    const metric = new Metric({
        name: 'valid_name',
        description: 'Valid description',
        timestamp: 12345,
    });
    metric.source = 'foo';
    t.equal(metric.source, 'foo');
    t.end();
});
