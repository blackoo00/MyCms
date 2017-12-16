import types from '../constants/ActionTypes';
import shop from '../../shared/shop';

const initDip = data => ({
    type:types.PRODUCT_INIT,
    data:data
})

export const init = () => dispatch => {
    shop.productInit((data) => {
        dispatch(initDip(data));
    })
}

const prodPageDip = (data,page) => ({
    type:types.PRODUCTS_PAGE,
    data:data,
    page:page
})

export const prodPage = (page,list,key) => dispatch => {
    if(list[page]){
        dispatch(prodPageDip('',page))
    }else{
        shop.choosePage(data => {
            dispatch(prodPageDip(data,page))
        },page,'Product',key)
    }
}

const prodSearchDip = (data,key) => ({
    type:types.PRODUCT_SEARCH,
    data:data,
    key:key
})

export const prodSearch = (key) => dispatch =>{
    shop.search(data => {
        dispatch(prodSearchDip(data,key));
    },'Product',key);
}
