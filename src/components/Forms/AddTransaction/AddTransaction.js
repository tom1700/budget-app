import React from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import PropTypes from 'prop-types';
import { routes } from '../../../constants';
import { transactionType } from '../../../redux/database/transaction/constants';
import { addTransaction } from '../../../redux/database/transaction/actions';
import getFullAccountList from '../../../redux/database/selectors/getFullAccountsList';
import getTransactionCategoriesByType from '../../../redux/database/selectors/getTransactionCategoriesListByType';
import { required } from '../validators';
import FieldWithValidation from '../InputWithValidation/InputWithValidation';
import SubmitButton from '../SubmitButton/SubmitButton';
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

const renderTransactionCategoryOption = (category, index) => (
    <option value={category.id} key={index}>{category.name}</option>
);

const AddTransactionForm = ({
    addTransaction,
    accounts,
    formValues,
    push,
    submitting,
    invalid,
    incomeTransactionCategories,
    expenseTransactionCategories

}) => {
    const handleSubmit = (ev) => {
        ev.preventDefault();
        addTransaction(formValues);
        push(routes.TRANSACTIONS);
    };
    const transactionCategories = {
        [transactionType.INCOME]: incomeTransactionCategories,
        [transactionType.EXPENSE]: expenseTransactionCategories
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
                { accounts.map(renderAccountOption) }
            </Field>
            <Field
                name="categoryId"
                component={Select}
                label="Transaction Category"
            >
                { transactionCategories[formValues.type || transactionType.INCOME].map(renderTransactionCategoryOption) }
            </Field>
            <SubmitButton type="submit" disabled={submitting || invalid } text="Save"/>
        </form>
    )
};

AddTransactionForm.propTypes = {
    addTransaction: PropTypes.func.isRequired,
    formValues: PropTypes.shape({
        productName: PropTypes.string,
        categoryId: PropTypes.string,
        value: PropTypes.string,
        type: PropTypes.oneOf(Object.values(transactionType)),
        accountId: PropTypes.string
    }),
    push: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
    invalid: PropTypes.bool.isRequired,
    incomeTransactionCategories: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
    })).isRequired,
    expenseTransactionCategories: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
    })).isRequired
};

const addTransactionFormValueSelector = formValueSelector('addTransaction');
const getExpenseTransactionCategoriesList = getTransactionCategoriesByType(transactionType.EXPENSE);
const getIncomeTransactionCategoriesList = getTransactionCategoriesByType(transactionType.INCOME);

export const ConnectedAddTransactionForm = connect(
    state => ({
        formValues: addTransactionFormValueSelector(state, 'productName', 'categoryId', 'value', 'type', 'accountId'),
        accounts: getFullAccountList(state),
        incomeTransactionCategories: getIncomeTransactionCategoriesList(state),
        expenseTransactionCategories: getExpenseTransactionCategoriesList(state)
    }),
    {
        addTransaction,
        push
    }
)(AddTransactionForm);


export default reduxForm({
    form: 'addTransaction',
    initialValues: {
        type: transactionType.INCOME,
        categoryId: '0',
        accountId: '0',
        value: '0'
    },
    validate,
    warn
})(ConnectedAddTransactionForm);
