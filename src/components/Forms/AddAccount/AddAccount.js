import React from 'react'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import PropTypes from 'prop-types';
import { addAccount } from '../../../redux/database/account/actions';
import { routes } from '../../../constants';
import { required, minValue, validateMultiple } from '../validators';
import FieldWithValidation from '../FieldWithValidation/FieldWithValidation';
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
                component={FieldWithValidation}
                type="text"
                label="Name"
            />
            <Field
                name="balance"
                component={FieldWithValidation}
                type="number"
                label="Balance"
            />
            <div className="add-account-form__field-group">
                <label htmlFor="currency">Currency</label>
                <Field name="currency" component="select">
                    <option value="PLN">PLN</option>
                </Field>
            </div>
            <button type="submit" disabled={submitting || invalid }>Save</button>
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
    validate,
    warn
})(ConnectedAddAccountForm);
