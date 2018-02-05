import React from 'react'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import PropTypes from 'prop-types';
import { addAccount } from '../../../redux/database/account/actions';
import { routes } from '../../../constants';
import { required } from '../helpers';

export const AddAccountForm = ({ addAccount, formValues, push }) => {
    const handleSubmit = (ev) => {
        ev.preventDefault();
        addAccount(formValues);
        push(routes.ACCOUNTS);
    };

    return (
        <form onSubmit={ handleSubmit }>
            <div>
                <label htmlFor="name">Name</label>
                <Field
                    name="name"
                    component="input"
                    type="text"
                    validate={[required]}
                />
            </div>
            <div>
                <label htmlFor="balance">Balance</label>
                <Field
                    name="balance"
                    component="input"
                    type="text"
                    validate={[required]}
                />
            </div>
            <div>
                <label htmlFor="currency">Currency</label>
                <Field name="currency" component="select">
                    <option value="PLN">PLN</option>
                </Field>
            </div>
            <button type="submit">Save</button>
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
    form: 'addAccount'
})(ConnectedAddAccountForm);
