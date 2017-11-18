import {fk, attr, Model} from 'redux-orm';


class Transaction extends Model {}

Transaction.modelName = 'Transaction';

Transaction.fields = {
    id: attr(),
    name: attr(),
    categoryId: fk('TransactionCategory'),
    accountId: fk('Account'),
    value: attr(),
    transactionType: attr(),
    date: attr(),
};


export default Transaction;