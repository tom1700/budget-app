export const required = value => (value ? undefined : 'Required');

export const minValue = min => value =>
    value && value < min ? `Must be at least ${min}` : undefined;

export const validateMultiple = (value, validators) =>
    validators.reduce((res, validator) => {
        return typeof res === 'string' ? res : validator(value);
    }, undefined);
