import types from '../constants/ActionTypes';
import shop from '../../shared/shop';

const pdetailInitDip = data => ({
    type:types.PDETAIL_INIT,
    data:data
})

export const pdetailInit = (id) => dispatch => {
    shop.pdetail(data => {
        dispatch(pdetailInitDip(data))
    },id)
}

export const editProdItem = (item,value) => ({
    type:types.EDITE_PRODUCT_ITEM,
    item:item,
    value:value,
})
//保存产品信息
export const saveProd = (data) => dispatch => {
    const save_data = JSON.stringify(data);
    shop.saveProd(save_data);
}

export const chooseAttr = aid => ({
    type:types.CHOOSE_ATTR,
    aid:aid
})

export const attrValue = (index,value_name,value) => ({
    type:types.ATTR_VALUE,
    index:index,
    value_name:value_name,
    value:value
})

export const upload = (src) => ({
    type:types.UPLOAD_LOGO,
    src:src
})

//是否上架
export const isOnSale = () => ({
    type:types.IS_ON_SALE
})

//编辑商品详情
export const editProCon = con => ({
    type:types.EDIT_PRO_DESC,
    con:con
})
