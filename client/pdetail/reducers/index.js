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
            state.logo = action.src;
            return {
                ...state,
            }
        default:
            return state
    }
}

export default App
