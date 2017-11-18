import {attr, Model} from 'redux-orm';


class TransactionCategory extends Model {}

TransactionCategory.modelName = 'TransactionCategory';

TransactionCategory.fields = {
    id: attr(),
    name: attr(),
    type: attr(),
};


export default TransactionCategory;