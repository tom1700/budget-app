import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import { addAccount } from '../../../redux/account/actions';


export const AddAccountForm = ({ addAccount }) => {
    const handleSubmit = () => null;

    return (
        <form onSubmit={ handleSubmit }>
            <div>
                <label htmlFor="name">Name</label>
                <Field name="name" component="input" type="text" />
            </div>
            <div>
                <label htmlFor="balance">Balance</label>
                <Field name="balance" component="input" type="text" />
            </div>
            <div>
                <label htmlFor="currency">Currency</label>
                <Field name="currency" component="input" type="text" />
            </div>
            <button type="submit">Save</button>
        </form>
    )
};

export const ConnectedAddAccountForm = connect(
    state => ({}),
    { addAccount }
)(AddAccountForm);

export default reduxForm({
    form: 'addAccount'
})(ConnectedAddAccountForm);
