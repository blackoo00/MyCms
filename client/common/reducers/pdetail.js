import types from '../constants/ActionTypes';

const initialState = {

}

const App = (state = initialState, action) => {
    switch(action.type){
        //修改商品属性
        case types.EDITE_PRODUCT_ITEM:
            state[action.item] = action.value;
            return {
                ...state,
            }
        case types.PDETAIL_INIT:
            return {
                ...state,
                ...action.data
            }
        default:
            return state
    }
}

export default App
