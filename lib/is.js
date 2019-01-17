'use strict';

// Ref; https://github.com/OpenObservability/OpenMetrics/blob/9a6db2a94dcf8dd84dd08a221e1b323e2b279f08/proto/openmetrics_data_model.proto#L42
const REGEX_NAME = /^[a-zA-Z_:][a-zA-Z0-9_:]*$/;

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
    return Number.isFinite(value) || value === null || value === undefined;
};
module.exports.validValue = validValue;


const validLabelValue = (value) => {
    return typeof value === 'boolean' || Number.isFinite(value) || isString(value) || value === null || value === undefined;
};
module.exports.validLabelValue = validLabelValue;


const validLabel = (value) => {
    if (typeof value !== 'object') {
        return false;
    }

    if (!('name' in value) || !('value' in value)) {
        return false;
    }

    if (!REGEX_NAME.test(value.name)) {
        return false;
    }

    return validLabelValue(value.value);
};
module.exports.validLabel = validLabel;


const validLabels = (value) => {
    if (!Array.isArray(value)) {
        return false;
    }

    if (value.length === 0) {
        return true;
    }

    const valid = value.filter(validLabel);

    return (value.length === valid.length);
};
module.exports.validLabels = validLabels;
