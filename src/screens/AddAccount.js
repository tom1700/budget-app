import React from 'react';
import AddAccountForm from '../components/Forms/AddAccount/AddAccount';
import { routes } from '../constants';
import ScreenWithFormLayout from './Layout/ScreenWithFormLayout';

const AddAccountScreen = () => (
    <ScreenWithFormLayout
        title="Add Account"
        link={routes.ACCOUNTS}
        linkTitle="Accounts"
    >
        <AddAccountForm />
    </ScreenWithFormLayout>
);


export default AddAccountScreen;
