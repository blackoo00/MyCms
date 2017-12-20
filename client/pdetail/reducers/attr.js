import types from '../constants/ActionTypes';

const initialState = {
    choose:[],
    spec:[],
    all:[],
    choose_id:''
}

//生成新的list
const list = (arr1 = [] , arr_all = [], index = 1) =>{
    if(arr_all[index]){
        const arr_temp = [];
        arr1.map(item1 => {
            arr_all[index].map(item2 => {
                if(Array.isArray(item1)){
                    arr_temp.push([...item1,item2]);
                }else{
                    arr_temp.push([item1,item2]);
                }
            })
        })
        return list(arr_temp,arr_all,index+1);
    }else{
        const list = [];
        arr1.map((item,index) => {
            if(Array.isArray(item)){
                list[index] = {
                    'attr' : item,
                    'price' : 0,
                    'number' : 0
                };
            }
        })
        return list;
    }
}
/*
    先创建已经选中的属性ID二维数组
    然后相互组合成新的数组
 */
const Choose = (spec,aid,choose_id) => {
    let arr_a = [];
    //获取已选中的属性
    spec.map(spec => {
        let arr_b = [];
        spec.attr.map(attr => {
            if(typeof(attr.choose) == 'undefined'){
                attr.choose = false;
            }
            if(choose_id.includes(attr.id)){
                attr.choose = true;
            }
            if(attr.id == aid){
                if(attr.choose === true){
                    attr.choose = false;
                }else{
                    attr.choose = true;
                }
            }
            if(attr.choose === true){
                arr_b.push(attr.id);
            }
        })
        if(arr_b.length != 0){
            arr_a.push(arr_b);
        }
    });
    console.log(arr_a);
    return arr_a;
}
//赋值choose 值
const StateChoose = (choose,arr_a) => {
    // console.log(choose);
    const choose_data = list(arr_a[0],arr_a);
    if(choose_data.length != 0){
        const choose_data_length = choose_data.length;
        const state_choose_length = choose.length;
        if(choose.length != 0){
            choose_data.map((item,index) => {
                if(typeof(choose[index]) == 'undefined'){
                    choose[index] = choose_data[index];
                }else{
                    if(choose[index].attr.toString() != item.attr.toString()){
                        choose[index] = choose_data[index];
                    }
                }
            })
            if(state_choose_length > choose_data_length){
                let splice_num = state_choose_length - choose_data_length;
                choose.splice(choose_data_length,splice_num)
            }
        }else{
            choose = choose_data;
        }
    }else{
        // console.log('empty');
        choose = [];
    }
    // console.log(choose);
    return choose;
}
//选中的Attr ID串
const AttrIds = (choose) => {
    const set = new Set();
    choose.map(item => {
        item.attr.map(item2 => {
            set.add(item2 + ',');
        })
    })
    let ids = '';
    for (let item of set.values()) {
        if(item){
            ids += item;
        }
    }
    return ids;
}

const App = (state = initialState, action) => {
    switch(action.type){
        //属性价格
        case types.ATTR_VALUE:

            state.choose[action.index][action.value_name] = action.value;
            return {
                ...state
            }
        //选择属性
        case types.CHOOSE_ATTR:
            const aid = action.aid;
            let arr_a = [];
            arr_a = Choose(state.spec,aid,state.choose_id);
            //交叉组合属性
            state.choose = StateChoose(state.choose,arr_a);
            //选中的Attr Id串
            state.choose_id = AttrIds(state.choose);

            return{
                ...state,
            };
        //商品详情页初始化
        // case types.PDETAIL_INIT:
        //     const data_list = [];
        //     action.data.attr.map((item,index) => {
        //         data_list[item.id] = item;
        //     })
        //     return {
        //         ...state,
        //         spec:action.data.spec,
        //         all:data_list,
        //         choose_id:action.data.choose_id,
        //         choose:action.data.detail
        //     }
        default:
            return state
    }
}

export default App
