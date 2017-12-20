import types from '../constants/ActionTypes';
import model from '../model/';

const initDip = data => ({
    type:types.CATS_INIT,
    data:data
});

export const init = () => dispatch => {
    model.getList().then(res => {
        dispatch(initDip(res));
    });
};

const catsPageDip = (data,page) => ({
    type:types.CATS_PAGE,
    data:data,
    page:page
});

export const catsPage = (page,list) => dispatch => {
    if(list[page]){
        dispatch(catsPageDip('',page))
    }else{
        model.getList(page).then(res => {
            console.log(res.showlist);
            dispatch(catsPageDip(res.showlist,page))
        });
    }
};
