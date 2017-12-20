import types from '../constants/ActionTypes';

const initialState = {
    user_count:0,
    total_count:0,
    on_sale:0
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
