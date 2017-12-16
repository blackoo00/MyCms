import types from '../constants/ActionTypes';
import shop from '../../shared/shop';

const InitDip = data => ({
    type:types.ORDERS_INIT,
    data:data
})

export const Init = data => dispatch => {
    shop.ordersInit(data => {
        dispatch(InitDip(data));
    })
}

const orderPageDip = (data,page) => ({
    type:types. ORDERS_PAGE,
    data:data,
    page:page
})

export const orderPage = (page,list,key) => dispatch => {
    if(list[page]){
        dispatch(orderPageDip('',page))
    }else{
        shop.choosePage(data => {
            dispatch(orderPageDip(data,page))
        },page,'Orders',key)
    }
}

const orderSearchDip = (data,key) => ({
    type:types.ORDERS_SEARCH,
    data:data,
    key:key
})

export const orderSearch = (key) => dispatch =>{
    shop.search(data => {
        dispatch(orderSearchDip(data,key));
    },'Orders',key);
}
