import {combineReducers} from 'redux';
import userInfo from './userInfo';
import home from '../../home/reducers/';
import member from './member';
import cats from './cats';
import product from '../../product/reducers/product';
import pdetail from '../../pdetail/reducers/pdetail';
import attr from '../../pdetail/reducers/attr';
import orders from '../../orders/reducers/orders';
import login from '../../login/reducers/login';

const rootReducer = combineReducers({
    userInfo,
    home,
    member,
    cats,
    product,
    pdetail,
    attr,
    orders,
    login
});

export default rootReducer;
