import types from '../constants/ActionTypes';
import shop from '../../shared/shop';
import model from '../model/';

const InitDip = data => ({
    type:types.ORDERS_INIT,
    data:data
})

export const Init = () => dispatch => {
    model.getList().then(res => {
        let data = {};
        data.items = res.last_page;
        data.showlist = res.data;
        dispatch(InitDip(data));
    });
}

const orderPageDip = (data,page) => ({
    type:types. ORDERS_PAGE,
    data:data,
    page:page
});

export const orderPage = (page,list,key) => dispatch => {
    if(list[page]){
        dispatch(orderPageDip('',page))
    }else{
        model.getList(page,key).then(res => {
            dispatch(orderPageDip(res.data,page));
        });
        // shop.choosePage(data => {
        //     dispatch(orderPageDip(data,page))
        // },page,'Orders',key)
    }
}

const orderSearchDip = (data,key) => ({
    type:types.ORDERS_SEARCH,
    data:data,
    key:key
})

export const orderSearch = (key) => dispatch =>{
    model.getList(1,key).then(res => {
        let data = {};
        data.search_items = res.last_page;
        data.showlist = res.data;
        console.log(data);
        dispatch(orderSearchDip(data,key));
    });
    // shop.search(data => {
    //     dispatch(orderSearchDip(data,key));
    // },'Orders',key);
}
