import types from '../constants/ActionTypes';

const initialState = {
    list:[],
    showlist:[],
    items:0,
    maxButtons:5,
    activePage:1
}

const Cats = (state = initialState, action) => {
    switch(action.type){
        case types.CATS_INIT:
            state.list[1] = action.data.showlist;
            return{
                ...state,
                ...action.data
            }
        case types.CATS_PAGE:
            if(action.data){
                state.list[action.page] = action.data;
            }
            return {
                ...state,
                showlist:action.data ? action.data : state.list[action.page],
                activePage:action.page
            }
        default:
            return state
    }
}

export default Cats;
