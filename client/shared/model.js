const STORESERVER = 'http://z.cn/api/cms/';
import utils from './utils';
const initialArr = {
    url:'',
    data:{},
    type:'get',
    server:STORESERVER
};

const ajaxData = (arr = initialArr, callback = function(){}) => {
    arr = {...initialArr,...arr};
    return new Promise(resolve => {
        utils.newAjax({
            url: arr.server + arr.url,
            data:arr.data,
            type:arr.type,
        }).then(data =>{
            resolve(data);
        })
    })
}
export default {
    ajaxData
}
