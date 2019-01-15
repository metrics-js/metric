'use strict';

// Ref; https://github.com/OpenObservability/OpenMetrics/blob/1dcecc569894abef6b67037b5e14f1813c7b84d7/metric_exposition_format.md
const REGEX_NAME = /^[a-zA-Z_][a-zA-Z0-9_]*$/;
const REGEX_LABEL = /^[a-zA-Z0-9_]*$/;

const isString = (value) => {
    return (typeof value === 'string');
};
module.exports.isString = isString;


const isEmptyString = (value) => {
    return (value.trim().length === 0);
};
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
    return (value >= 0 && value <= 7);
};
module.exports.validType = validType;


const validDescription = (value) => {
    return isString(value) || value === null || value === undefined;
};
module.exports.validDescription = validDescription;


const validSource = (value) => {
    return isString(value) || value === null || value === undefined;
};
module.exports.validSource = validSource;


const validTimestamp = (value) => {
    return Number.isFinite(value) || value === null || value === undefined;
};
module.exports.validTimestamp = validTimestamp;


const validValue = (value) => {
    return Number.isSafeInteger(value) || value === null || value === undefined;
};
module.exports.validValue = validValue;


const validLabel = (value) => {
    if (!value.name || !value.value) {
        return false;
    }

    if (!REGEX_LABEL.test(value.name)) {
        return false;
    }

    return validValue(value.value);
};
module.exports.validLabel = validLabel;


const validLabels = (value) => {
    if (!Array.isArray(value)) {
        return false;
    }

    if (value.length === 0) {
        return true;
    }

    const valid = value.filter(validLabel).length;

    return (value.length === valid);
};
module.exports.validLabels = validLabels;
