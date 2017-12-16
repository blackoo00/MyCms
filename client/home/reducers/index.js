import types from '../constants/ActionTypes';

const initialState = {
    prod_total_num:0,
    prod_on_sale:0
}

const App = (state = initialState,action) => {
    switch(action.type){
        case types.HOME_INIT:
            return {
                ...state,
                ...action.data
            }
        default:
            return state;
    }
}

export default App
