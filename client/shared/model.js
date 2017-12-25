const STORESERVER = 'http://z.cn/api/cms/';
import {Utils} from './utils';
const initialArr = {
    url:'',
    data:{},
    type:'get',
    server:STORESERVER
};

class Model extends Utils{
    ajaxData(arr = initialArr, callback = function(){}){
        arr = {...initialArr,...arr};
        return new Promise(resolve => {
            this.newAjax({
                url: arr.server + arr.url,
                data:arr.data,
                type:arr.type,
            }).then(data =>{
                resolve(data);
            })
        })
    }
}

export {Model}
