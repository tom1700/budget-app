import { LOCATION_CHANGE } from 'react-router-redux';
import { closeMenu } from '../sidemenu/actions';

export default store => next => action => {
    if (action.type === LOCATION_CHANGE) {
        store.dispatch(closeMenu());
    }
    return next(action);
};