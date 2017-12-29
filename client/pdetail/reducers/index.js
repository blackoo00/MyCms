import types from '../constants/ActionTypes';

const initialState = {
    editor_icons:[
        "source | undo redo | bold italic underline strikethrough fontborder emphasis | ",
        "paragraph fontfamily fontsize | superscript subscript | ",
        "forecolor backcolor | removeformat | insertorderedlist insertunorderedlist | selectall | ",
        "cleardoc  | indent outdent | justifyleft justifycenter justifyright | touppercase tolowercase | ",
        "horizontal date time  | image emotion spechars | inserttable"
    ],
}

const App = (state = initialState, action) => {
    switch (action.type) {
        case types.EDIT_PRO_PROPERTY_DEL:
            console.log(action.index)
            state.properties.splice(action.index,1);
            return {
                ...state
            }
        case types.EDIT_PRO_PROPERTY_ADD:
            state.properties.push({
                detail:'',
                name:'',
                product_id:action.product_id
            });
            return {
                ...state
            }
        case types.EDIT_PRO_PROPERTY:
            state.properties[action.index][action.name] = action.value;
            return {
                ...state
            }
        //编辑商品详情
        case types.EDIT_PRO_DESC:
            state.details = action.content;
            return {
                ...state
            }
        //商品是否上架
        case types.IS_ON_SALE:
            state.is_on_sale = state.is_on_sale == 1 ? 0 : 1;
            return {
                ...state
            }
        //修改商品属性
        case types.EDITE_PRODUCT_ITEM:
            state[action.item] = action.value;
            return {
                ...state,
            }
        //初始化
        case types.PDETAIL_INIT:
            return {
                ...state,
                ...action.data
            };
        case types.UPLOAD_LOGO:
            state.main_img_url = action.src;
            return {
                ...state,
            }
        default:
            return state
    }
}

export default App
