import types from '../constants/ActionTypes';
import shop from '../../shared/shop2';

export const Login = (ac,se) => dispatch => {
    const aData = {
        ac:ac,
        se:se
    }
    shop.login(aData,data => {
        console.log(data);
    })
};

export const handleAccount = data => ({
    type:types.INPUTAC,
    data:data
});

export const handlePassword = data => ({
    type:types.INPUTSE,
    data:data
});
