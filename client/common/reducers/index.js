import {combineReducers} from 'redux'
import userInfo from './userInfo'
import login from '../../login/reducers/login';
import home from '../../home/reducers/';
import member from '../../member/reducers/';
import product from '../../product/reducers/';
import cats from '../../cats/reducers/';
import orders from '../../orders/reducers/';
import pdetail from '../../pdetail/reducers/';

const rootReducer = combineReducers({
    userInfo,
    login,
    home,
    member,
    product,
    cats,
    orders,
    pdetail
})

export default rootReducer
