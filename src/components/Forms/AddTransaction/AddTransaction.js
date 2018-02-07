import React from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import PropTypes from 'prop-types';
import { routes } from '../../../constants';
import { transactionType } from '../../../redux/database/transaction/constants';
import { addTransaction } from '../../../redux/database/transaction/actions';
import getFullAccountList from '../../../redux/database/selectors/getFullAccountsList';
import { required } from '../validators';
import FieldWithValidation from '../InputWithValidation/InputWithValidation';
import Select from '../Select/Select';
import './AddTransaction.css';

const validate = values => ({
    productName: required(values.productName),
    value: required(values.value)
});

const warn = values => ({});

const renderOption = (value, index) => (
    <option value={value} key={index}>{ value.toLowerCase() }</option>
);

const renderAccountOption = (account, index) => (
    <option value={account.id} key={index}>{account.name}</option>
);

const AddTransactionForm = ({
    addTransaction,
    accounts,
    formValues,
    push,
    submitting,
    invalid
}) => {
    const handleSubmit = (ev) => {
        ev.preventDefault();
        addTransaction(formValues);
        push(routes.TRANSACTIONS);
    };

    return (
        <form onSubmit={ handleSubmit } className="add-transaction-form">
            <Field
                name="productName"
                component={FieldWithValidation}
                type="text"
                label="Product name"
            />
            <Field
                name="value"
                component={FieldWithValidation}
                type="number"
                label="Value"
            />
            <Field
                name="type"
                component={Select}
                label="Type"
            >
                { Object.values(transactionType).map(renderOption) }
            </Field>
            <Field
                name="accountId"
                component={Select}
                label="Account"
            >
                { Object.values(accounts).map(renderAccountOption) }
            </Field>
            <button type="submit" disabled={submitting || invalid }>Save</button>
        </form>
    )
};

AddTransactionForm.propTypes = {
    addTransaction: PropTypes.func.isRequired,
    formValues: PropTypes.shape({
        productName: PropTypes.string,
        categoryId: PropTypes.number,
        value: PropTypes.number,
        type: PropTypes.oneOf(Object.values(transactionType)),
        accountId: PropTypes.number
    }),
    push: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
    invalid: PropTypes.bool.isRequired
};

const addTransactionFormValueSelector = formValueSelector('addTransaction');

export const ConnectedAddTransactionForm = connect(
    state => ({
        formValues: addTransactionFormValueSelector(state, 'productName', 'categoryId', 'value', 'type', 'accountId'),
        accounts: getFullAccountList(state)
    }),
    {
        addTransaction,
        push
    }
)(AddTransactionForm);


export default reduxForm({
    form: 'addTransaction',
    validate,
    warn
})(ConnectedAddTransactionForm);
