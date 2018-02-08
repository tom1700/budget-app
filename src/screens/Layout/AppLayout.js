import React from 'react';
import { routes } from '../../constants';
import SideMenu from '../../components/SideMenu/SideMenu';
import MenuNavLink from '../../components/SideMenu/MenuNavLink';
import Routes from '../../Routes';
import './AppLayout.css';

export default () => (
    <div className="layout">
        <SideMenu menuItems={ [
            <MenuNavLink exact to={ routes.HOME } >Home</MenuNavLink>,
            <MenuNavLink to={ routes.ACCOUNTS } >Accounts</MenuNavLink>,
            <MenuNavLink to={ routes.TRANSACTION_CATEGORIES } >Categories</MenuNavLink>,
            <MenuNavLink to={ routes.TRANSACTIONS } >Transactions</MenuNavLink>,
            <MenuNavLink to={ routes.ADD_ACCOUNT} >Add Account</MenuNavLink>,
            <MenuNavLink to={ routes.ADD_TRANSACTION_CATEGORY } >Add Transaction Category</MenuNavLink>,
            <MenuNavLink to={ routes.ADD_TRANSACTION } >Add Transaction</MenuNavLink>,
            <MenuNavLink to={ routes.UPDATE_ACCOUNT } >Update Account</MenuNavLink>,
            <MenuNavLink to={ routes.UPDATE_TRANSACTION_CATEGORY } >Update Transaction Category</MenuNavLink>
        ] } />
        <Routes />
    </div>
);