import { updateDocument } from '../../services/database';
import { dbDocs } from '../../constants';
import { actions as accountActions } from '../database/account/constants';
import { actions as transactionActions } from '../database/transaction/constants';
import { actions as transactionCategoryActions } from '../database/transactionCategory/constants';

export default store => next => async action => {
    next(action);
    if (action.type in accountActions ||
        action.type in transactionActions ||
        action.type in transactionCategoryActions
    ) {
        await updateDocument(dbDocs.ACCOUNTS, store.getState().accounts);
        await updateDocument(dbDocs.TRANSACTIONS, store.getState().transactions);
        await updateDocument(dbDocs.CATEGORIES, store.getState().categories);
    }
};