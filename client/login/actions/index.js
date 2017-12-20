import types from '../constants/ActionTypes';
import model from '../model/';
import {browserHistory} from 'react-router';

export const Login = (ac,se) => dispatch => {
    const aData = {
        ac:ac,
        se:se
    };
    model.login(aData)
        .then(token =>{
            if(token){
                localStorage.setItem('token',token);
            }
            localStorage.setItem('account',ac);
            browserHistory.push('/')
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
