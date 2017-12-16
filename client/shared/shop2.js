const STORESERVER = 'http://z.cn/api/v1/';
import request from 'superagent'

import utils from './utils';
const initialArr = {
    url:'',
    data:{},
    type:'post',
    server:STORESERVER
};

const ajaxData = (arr = initialArr,callback = function(){}) => {
    arr = {...initialArr,...arr}
    utils.myPost({
        url: arr.server + arr.url,
        data:arr.data,
        type:arr.type,
    })
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
