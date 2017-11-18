class Transaction {}

Transaction.modelName = 'Transaction';

Transaction.fields = {
    id,
    name,
    categoryId,
    accountId,
    value,
    transactionType,
    date,
};


export default Transaction;