import types from '../constants/ActionTypes';
import model from '../model/';

const initDip = data => ({
    type:types.PRODUCT_INIT,
    data:data
})

export const init = () => dispatch => {
    model.getList().then(res => {
        let data = {};
        data.items = res.last_page;
        data.showlist = res.data;
        dispatch(initDip(data));
    });
};

const prodPageDip = (data,page) => ({
    type:types.PRODUCTS_PAGE,
    data:data,
    page:page
})

export const prodPage = (page,list,key) => dispatch => {
    if(list[page]){
        dispatch(prodPageDip('',page))
    }else{
        model.getList(page,key).then(res => {
            dispatch(prodPageDip(res.data,page))
        });
    }
};

const prodSearchDip = (data,key) => ({
    type:types.PRODUCT_SEARCH,
    data:data,
    key:key
});

export const prodSearch = (key) => dispatch =>{
    model.getList(1,key).then(res => {
        let data = {};
        data.search_items = res.last_page;
        data.showlist = res.data;
        console.log(data);
        dispatch(prodSearchDip(data,key));
    });
}
