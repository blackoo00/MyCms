import {combineReducers} from 'redux';
import userInfo from './userInfo';
import home from '../../home/reducers/';
import member from '../../member/reducers/';
import cats from '../../cats/reducers/';
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
