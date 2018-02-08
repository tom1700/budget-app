import { routerMiddleware } from 'react-router-redux'
import history from '../history';
import sideMenuHide from './middlewares/sideMenuHide';
import database from './middlewares/database';

export default [ routerMiddleware(history),  database, sideMenuHide ];