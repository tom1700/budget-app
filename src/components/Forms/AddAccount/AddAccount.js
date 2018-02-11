import React from 'react'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import PropTypes from 'prop-types';
import { addAccount } from '../../../redux/database/account/actions';
import { currency } from '../../../redux/database/account/constants';
import { routes } from '../../../constants';
import { required, minValue, validateMultiple } from '../validators';
import InputWithValidation from '../InputWithValidation/InputWithValidation';
import SubmitButton from '../SubmitButton/SubmitButton';
import Select from '../Select/Select';
import './AddAccount.css';

const validate = values => ({
    name: required(values.name),
    balance: validateMultiple(values.balance, [
        required,
        minValue(0)
    ]),
});

const warn = values => ({});

export const AddAccountForm = ({ addAccount, formValues, push, submitting, invalid }) => {
    const handleSubmit = (ev) => {
        ev.preventDefault();
        addAccount(formValues);
        push(routes.ACCOUNTS);
    };

    return (
        <form onSubmit={ handleSubmit } className="add-account-form">
            <Field
                name="name"
                component={InputWithValidation}
                type="text"
                label="Name"
            />
            <Field
                name="balance"
                component={InputWithValidation}
                type="number"
                label="Balance"
            />
            <Field name="currency" component={Select} label="Currency">
                { Object.values(currency).map((curr) => <option value={curr}>{curr}</option>)}
            </Field>
            <SubmitButton type="submit" disabled={submitting || invalid } text="Save"/>
        </form>
    )
};

AddAccountForm.propTypes = {
    addAccount: PropTypes.func.isRequired,
    formValues: PropTypes.shape({
        name: PropTypes.string,
        balance: PropTypes.string,
        currency: PropTypes.string
    }),
    push: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
    invalid: PropTypes.bool.isRequired
};

const addAccountFormValueSelector = formValueSelector('addAccount');

export const ConnectedAddAccountForm = connect(
    state => ({
        formValues: addAccountFormValueSelector(state, 'name', 'balance', 'currency')
    }),
    {
        addAccount,
        push
    }
)(AddAccountForm);

export default reduxForm({
    form: 'addAccount',
    initialValues: {
        currency: currency.PLN,
    },
    validate,
    warn
})(ConnectedAddAccountForm);
