import React from 'react';
import { connect } from 'react-redux';
import getFullAccountsList from '../redux/database/selectors/getFullAccountsList';
import { removeAccount } from '../redux/database/account/actions';
import { routes } from '../constants';
import List from '../components/List/List';
import AccountElement from '../components/List/AccountElement/AccountElement';
import ScreenWithListLayout from './Layout/ScreenWithListLayout';

const AccountsScreen = ({ accounts, removeAccount }) => (
    <ScreenWithListLayout
        link={routes.ADD_ACCOUNT}
        linkTitle="+ Add new"
        title="Your accounts"
    >
        <List
            data={ accounts }
            ElementComponent={ AccountElement }
            removeElement={ removeAccount }
        />
    </ScreenWithListLayout>
);

export default connect(
    state => ({
        accounts: getFullAccountsList(state)
    }),
    { removeAccount }
)(AccountsScreen);