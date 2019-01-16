'use strict';

/* eslint no-unused-vars: "off", import/no-extraneous-dependencies: "off", no-console: "off" */

const benchmark = require('benchmark');
const Metric = require('../');

const suite = new benchmark.Suite();

const add = (name, fn) => {
    suite.add(name, fn);
};

/**
 * new Metric();
 */

const now = Date.now();

add('new Metric() - Cached timestamp', () => {
    const m = new Metric({
        name: 'foo',
        description: 'foo_bar',
        timestamp: now,
    });
});

add('new Metric() - Create timestamp', () => {
    const m = new Metric({
        name: 'foo',
        description: 'foo_bar',
    });
});

suite
    .on('cycle', (ev) => {
        console.log(ev.target.toString());
        if (ev.target.error) {
            console.error(ev.target.error);
        }
    })
    .run();
