// @flow
import type { AccountList } from '../../account/schema/reducer.flow';
import type { TransactionList } from '../../transaction/schema/reducer.flow';
import type { TranasactionCategoryList } from '../../transactionCategory/schema/reducer.flow';
import { currency } from '../../account/constants';
import { transactionType } from '../../transaction/constants';


const store : {
    accounts: AccountList,
    transactions: TransactionList,
    categories: TranasactionCategoryList,
    form: {},
    router: {}
} = {
    accounts: [
        {
            id: 0,
            name: 'Account1',
            balance: 10,
            currency: currency.PLN
        },
        {
            id: 1,
            name: 'Account2',
            balance: 11,
            currency: currency.PLN
        },
        {
            id: 2,
            name: 'Account3',
            balance: 100,
            currency: currency.PLN
        }
    ],
    transactions: [
        {
            id: 0,
            productName: 'Polish government stocks',
            categoryId: 0,
            value: 100,
            type: transactionType.INCOME,
            accountId: 1,
            date: 0
        },
        {
            id: 1,
            productName: 'German government stocks',
            categoryId: 0,
            value: 100,
            type: transactionType.INCOME,
            accountId: 0,
            date: 0
        },
        {
            id: 2,
            productName: 'Chips',
            categoryId: 1,
            value: 2,
            type: transactionType.EXPENSE,
            accountId: 0,
            date: 0
        },
        {
            id: 3,
            productName: 'Water',
            categoryId: 1,
            value: 1,
            type: transactionType.EXPENSE,
            accountId: 2,
            date: 0
        }
    ],
    categories: [
        {
            id: 0,
            name: 'Stocks',
            type: transactionType.INCOME
        },
        {
            id: 1,
            name: 'Food',
            type: transactionType.EXPENSE
        },
    ],
    form: {},
    router: {}
};

export default store;