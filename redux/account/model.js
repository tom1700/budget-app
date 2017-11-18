import {attr, Model} from 'redux-orm';


class Account extends Model {}

Account.modelName = 'Account';

Account.fields = {
    id: attr(),
    name: attr(),
    balance: attr(),
    currency: attr()
};


export default Account;