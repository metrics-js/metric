# @metrics/metric

The metric class definition which metric objects is instansiated from.

[![Dependencies](https://img.shields.io/david/metrics-js/metric.svg?style=flat-square)](https://david-dm.org/metrics-js/metric)
[![Build Status](http://img.shields.io/travis/metrics-js/metric/master.svg?style=flat-square)](https://travis-ci.org/metrics-js/metric) [![Greenkeeper badge](https://badges.greenkeeper.io/metrics-js/metric.svg)](https://greenkeeper.io/)

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

## Description

This module is the metric class definition which metric objects is instansiated from.

All modules in the `@metric` family which exchange data over the `stream` API exchange
this object type. This object definition is intended to be static over time so modules
who depend on a module in the `@metric` family can rely on exchanging data over time.

This class definition is prefered over object literals when exchanging data over the
`stream` API because it will guarantee that all properties are available on the
object. All undefined properties will have a `null` value, making sure they are kept
when serialized to JSON.

## Constructor

Create a new Metric instance.

  ```js
 const Metric = require('@metrics/metric');
 const metric = new Metric(options);
 ```

### options (required)

An object literal reflecting the properties of this class. The following properties
is required:

 * **name** - `String` - The name of the metric.
 * **value** - `String|Number` - The value of the metric.

## Properties

The instansiated object has the following properties:

### type

A hint of what type of metric this is.

 * Valid values: `Number` in the range of `0-7`.
 * Value is imutable.

Each numeric value reflect one of the following types:

 * `0` represents `unknown`.
 * `1` represents `gauge`.
 * `2` represents `counter`.
 * `3` represents `state_set`.
 * `4` represents `info`.
 * `5` represents `cumulative histogram`.
 * `6` represents `gauge histogram`.
 * `7` represents `summary`.

### name

The name of the metric.

 * Valid characters: `a-z,A-Z,0-9,_`.
 * Value is imutable.

### value

The value of the metric.

 * Valid values: `Number` or `String`.
 * Value is imutable.

### source

The source of the metric in terms of where it originated.

 * Valid characters: `a-z,A-Z,0-9,_`.
 * Value is mutable.

### description

A human readable description of the metric.

 * Valid values: `String`.
 * Value is imutable.

### timestamp

A timestamp of when the metric was created.

 * Valid values: `Number`.
 * Value is imutable.

### time

N/A.

 * Valid values: `Number`.
 * Value is imutable.

### meta

Available to be used to hold any misc data.	In practice, meta can be used as
a way to label metrics. Use each key of the meta object as the label name and
the value as the label value.

 * Valid values: `Object`.
 * Value is imutable.
