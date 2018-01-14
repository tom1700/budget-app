import React from 'react';
import { connect } from 'react-redux';
import getFullAccountsList from '../../redux/selectors/getFullAccountsList';

const AccountsList = ({ accounts }) => {
    const renderAccount = (account) => (
        <div>{ account.name }</div>
    );

    return (
        <div>
            <h2>Your accounts:</h2>
            { accounts.map((account) => renderAccount(account)) }
        </div>
    );
};

export default connect(
    state => ({
        accounts: getFullAccountsList(state)
    })
)(AccountsList);