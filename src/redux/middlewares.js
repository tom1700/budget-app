import { routerMiddleware } from 'react-router-redux'
import history from '../history';
import sideMenuHide from './middlewares/sideMenuHide';

export default [ routerMiddleware(history),  sideMenuHide ];