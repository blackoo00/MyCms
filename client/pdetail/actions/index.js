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
export const saveProd = (data,msg) => () => {
    model.updateData(data,msg).then(res => {
        if(res.code == 201){
            msg.show('修改成功', {
                time: 2000,
                type: 'success',
            });
        }else{
            msg.show('修改失败', {
                time: 2000,
                type: 'fail',
            });
        }
    })
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

export const editProperty = (index,name,value) => ({
    type:types.EDIT_PRO_PROPERTY,
    index:index,
    name:name,
    value:value
})
export const addProperty = (product_id) => ({
    type:types.EDIT_PRO_PROPERTY_ADD,
    product_id:product_id
})
export const delProperty = (index) => ({
    type:types.EDIT_PRO_PROPERTY_DEL,
    index:index
})
