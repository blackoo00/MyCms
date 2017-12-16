import types from '../../common/constants/ActionTypes';
import shop from '../../shared/shop';

const initDip = data => ({
    type:types.CATS_INIT,
    data:data
})

export const init = () => dispatch => {
    shop.catsInit(data => {
        dispatch(initDip(data));
    })
}

const catsPageDip = (data,page) => ({
    type:types.CATS_PAGE,
    data:data,
    page:page
})

export const catsPage = (page,list) => dispatch => {
    if(list[page]){
        dispatch(catsPageDip('',page))
    }else{
        shop.choosePage(data => {
            dispatch(catsPageDip(data,page))
        },page,'ProductCat')
    }
}
