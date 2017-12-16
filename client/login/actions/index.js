import types from '../../common/constants/ActionTypes';
import shop from '../../shared/shop2';

export const Login = () => dispatch => {
    shop.login(data => {
        console.log(data);
    })
};
