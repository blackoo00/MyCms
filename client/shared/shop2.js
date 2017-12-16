const STORESERVER = 'http://z.cn/api/v1/';
import request from 'superagent'

import utils from './utils';
const initialArr = {
    url:'',
    data:{},
    async:true,
    type:'post',
    Accept: 'application/json',
    server:STORESERVER
}

const ajaxData = (arr = initialArr,callback = function(){}) => {
    console.log(arr);
    arr = {...initialArr,...arr}
    utils.ajax({
        url: arr.server + arr.url,
        data:arr.data,
        async:arr.async,
        type:arr.type,
        dataType:'json'
    }).then(res => {
        callback(res.data)
    })
}
export default {
    login:(cb) => {
        const data = {
            url:'token/app',
            token:'123',
            type:'post',
            Accept: 'application/json',
        };
        ajaxData(data,cb)
        // console.log('123');
        // request.post('http://z.cn/api/v1/token/app')
        //     .type('application/json')
        //     .end(res => {
        //         console.log(res)
        //     })
    }
}
