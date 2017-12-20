import types from '../constants/ActionTypes';

const inititalState = {
    list:[]
}

const member = (state = inititalState, action) =>{
    switch(action.type){
        case types.MEMBER_INIT:
            return{
                ...state,
                list:action.data
            }
        default:
            return state;
    }
}

export default member;
