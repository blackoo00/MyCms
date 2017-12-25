import types from '../constants/ActionTypes';

const initialState = {
    list:[],
    cid:0,
    showlist:[],
    items:0,
    maxButtons:5,
    activePage:1,
    search_list:[],
    search_items:0,
    search_maxButtons:5,
    search_activePage:1,
    search_key:'',
}

const Product = (state = initialState, action ) => {
    switch(action.type){
        //初始化
        case types.PRODUCT_INIT:
            state.list[1] = action.data.showlist;
            return {
                ...state,
                ...action.data
            }
        case types.PRODUCT_SEARCH:
            state.search_list = [];
                state.search_list[1] = action.data.showlist;
            return {
                ...state,
                ...action.data,
                search_key:action.key
            }
        case types.PRODUCTS_PAGE:
            if(state.search_key){
                if(action.data){
                    state.search_list[action.page] = action.data;
                }
            }else{
                if(action.data){
                    state.list[action.page] = action.data;
                }
            }
            return {
                ...state,
                showlist:action.data ? action.data : state.list[action.page],
                activePage:state.search_key ? 1 : action.page,
                search_activePage:state.search_key ? action.page : 1
            }
        default:
            return state
    }
}

export default Product
