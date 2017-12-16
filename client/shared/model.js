const STORESERVER = 'http://z.cn/api/v1/';
import utils from './utils';
const initialArr = {
    url:'',
    data:{},
    type:'post',
    server:STORESERVER
};

const ajaxData = (arr = initialArr, callback = function(){}) => {
    arr = {...initialArr,...arr};
    utils.newAjax({
        url: arr.server + arr.url,
        data:arr.data,
        type:arr.type,
    }).then(res => {
            callback(res);
        }
    )
}
export default {
    login:(aData,cb) => {
        const data = {
            url:'token/app',
            token:'123',
            type:'post',
            data:aData
        };
        ajaxData(data,cb)
    }
}
