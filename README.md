# @metrics/metric

The metric class definition which metric objects is instansiated from.

[![Dependencies](https://img.shields.io/david/metrics-js/metric.svg?style=flat-square)](https://david-dm.org/metrics-js/metric)
[![Build Status](http://img.shields.io/travis/metrics-js/metric/master.svg?style=flat-square)](https://travis-ci.org/metrics-js/metric)

## Installation

```bash
$ npm install @metrics/metric
```

## Example

```js
const Metric = require('@metrics/metric');

const metric = new Metric({
    name: 'unique_metric_name',
    description: 'Description of metric being collected',
    value: 10,
});
```