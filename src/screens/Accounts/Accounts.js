import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import getFullAccountsList from '../../redux/selectors/getFullAccountsList';
import { routes } from '../../constants';
import List from '../../components/List/List';
import AccountElement from '../../components/List/AccountElement/AccountElement';

const AccountsScreen = ({ accounts }) => {
    const renderElement = element => <AccountElement { ...element } />;

    return (
        <div>
            <Link to={routes.ADD_ACCOUNT}>Add account</Link>
            <List
                data={ accounts }
                renderElement={ renderElement }
            />
        </div>
    );
};

export default connect(
    state => ({
        accounts: getFullAccountsList(state)
    })
)(AccountsScreen);