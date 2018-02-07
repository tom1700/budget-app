import React from 'react'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import PropTypes from 'prop-types';
import { addTransactionCategory } from '../../../redux/database/transactionCategory/actions';
import { transactionType } from '../../../redux/database/transaction/constants';
import { routes } from '../../../constants';
import { required } from '../validators';
import FieldWithValidation from '../InputWithValidation/InputWithValidation';
import Select from '../Select/Select';
import './AddTransactionCategory.css';

const validate = values => ({
    name: required(values.name),
});

const warn = values => ({});

const renderOption = (value, index) => (
    <option value={value} key={index}>{ value.toLowerCase() }</option>
);

export const AddTransactionCategoryForm = ({ addTransactionCategory, formValues, push, submitting, invalid }) => {
    const handleSubmit = (ev) => {
        ev.preventDefault();
        addTransactionCategory(formValues);
        push(routes.TRANSACTION_CATEGORIES);
    };

    return (
        <form onSubmit={ handleSubmit } className="add-transaction-category-form">
            <Field
                name="name"
                component={FieldWithValidation}
                type="text"
                label="Name"
            />
            <Field
                name="type"
                component={Select}
                label="Type"
            >
                { Object.values(transactionType).map(renderOption) }
            </Field>
            <button type="submit" disabled={submitting || invalid }>Save</button>
        </form>
    )
};

AddTransactionCategoryForm.propTypes = {
    addTransactionCategory: PropTypes.func.isRequired,
    formValues: PropTypes.shape({
        name: PropTypes.string,
        type: PropTypes.oneOf(Object.values(transactionType)),
    }),
    push: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
    invalid: PropTypes.bool.isRequired
};

const addTransactionCategoryFormValueSelector = formValueSelector('addTransactionCategory');

export const ConnectedAddTransactionCategoryForm = connect(
    state => ({
        formValues: addTransactionCategoryFormValueSelector(state, 'name', 'type')
    }),
    {
        addTransactionCategory,
        push
    }
)(AddTransactionCategoryForm);

export default reduxForm({
    form: 'addTransactionCategory',
    validate,
    warn
})(ConnectedAddTransactionCategoryForm);
