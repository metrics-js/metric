'use strict';

// Ref; https://github.com/OpenObservability/OpenMetrics/blob/1dcecc569894abef6b67037b5e14f1813c7b84d7/metric_exposition_format.md
const REGEX_NAME = /[a-zA-Z_][a-zA-Z0-9_]*/;
const REGEX_LABEL_NAME = /[a-zA-Z0-9_]*/;

const isString = (value) => {
    return (typeof value === 'string');
}
module.exports.isString = isString;


const isEmptyString = (value) => {
    return (value.trim().length === 0);
}
module.exports.isEmptyString = isEmptyString;


const notEmpty = (value) => {
    if (value === undefined) {
        return false;
    }

    if (value === null) {
        return false;
    }

    if (isString(value) && isEmptyString(value)) {
        return false;
    }

    return true;
};
module.exports.notEmpty = notEmpty;


const validName = (value) => {
    return REGEX_NAME.test(value);
};
module.exports.validName = validName;


const validType = (value) => {
    return (0 <= value && value <= 7);
};
module.exports.validType = validType;
