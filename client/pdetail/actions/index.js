import types from '../constants/ActionTypes'
import model from '../model/'

const pdetailInitDip = data => ({
    type:types.PDETAIL_INIT,
    data:data
});

export const pdetailInit = (id) => dispatch => {
    model.getDetail(id).then(res => {
        dispatch(pdetailInitDip(res))
    });
};

export const editProdItem = (item,value) => ({
    type:types.EDITE_PRODUCT_ITEM,
    item:item,
    value:value,
});
//保存产品信息
export const saveProd = (data,msg) => dispatch => {
    // const save_data = JSON.stringify(data);
    model.updateData(data).then(res => {
        if(res.code == 201){
            msg.show('修改成功', {
                time: 2000,
                type: 'success',
            });
        }
    })
    // shop.saveProd(save_data);
};

export const upload = (src) => ({
    type:types.UPLOAD_LOGO,
    src:src
});

//是否上架
export const isOnSale = () => ({
    type:types.IS_ON_SALE
});

//编辑商品详情
export const editProCon = con => ({
    type:types.EDIT_PRO_DESC,
    content:con
});
