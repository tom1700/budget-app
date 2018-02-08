import React from 'react';
import { connect } from 'react-redux';
import getFullAccountsList from '../redux/database/selectors/getFullAccountsList';
import { routes } from '../constants';
import List from '../components/List/List';
import AccountElement from '../components/List/AccountElement/AccountElement';
import ScreenWithListLayout from './Layout/ScreenWithListLayout';

const AccountsScreen = ({ accounts }) => {
    const renderElement = props => <AccountElement { ...props } />;

    return (
        <ScreenWithListLayout
            link={routes.ADD_ACCOUNT}
            linkTitle="Add account"
        >
            <List
                data={ accounts }
                renderElement={ renderElement }
                title="Your accounts:"
            />
        </ScreenWithListLayout>
    );
};

export default connect(
    state => ({
        accounts: getFullAccountsList(state)
    })
)(AccountsScreen);