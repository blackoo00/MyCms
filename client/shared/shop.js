const STORESERVER = 'http://127.0.0.1/my-store/index.php/Back/Store/';

import utils from './utils';
const initialArr = {
    url:'',
    data:{},
    async:true,
    type:'get',
    server:STORESERVER
}

const ajaxData = (arr = initialArr,callback = function(){}) => {
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
    //订单初始化
    ordersInit:(cb) => {
        const data = {
            url:'orders',
        }
        ajaxData(data,cb);
    },
    //上传文件
    upload:(src) => {
        const data = {
            url: 'uploadFile',
            data:{src:src},
            type:'post'
        };
        ajaxData(data);
    },
    //保存商品修改
    saveProd:(save_data) => {
        const data = {
            url:'saveProd',
            data:{data:save_data},
            type:'post'
        };
        ajaxData(data);
    },
    //产品页初始化
    productInit:(cb) => {
        const data = {
            url:'products'
        };
        ajaxData(data,cb)
    },
    //home页面初始化
    homeInit:(cb) => {
        const data = {
            url:'home',
        };
        ajaxData(data,cb);
    },
    //会员信息
    memberInit:(cb) => {
        const data = {
            url:'member',
        };
        ajaxData(data,cb);
    },
    //分类信息
    catsInit:(cb) => {
        const data = {
            url:'cats'
        };
        ajaxData(data,cb);
    },
    //分页选择
    choosePage:(cb,page,db_name,key) => {
        const data = {
            url:'choosePage',
            data:{page:page,db_name:db_name,key:key}
        };
        ajaxData(data,cb);
    },
    //搜索
    search:(cb,db_name,key) => {
        const data = {
            url:'search',
            data:{db_name:db_name,key:key}
        };
        ajaxData(data,cb)
    },
    //产品详情
    pdetail:(cb,id) => {
        const data = {
            url:'pdetail',
            data:{id:id},
            type:'post'
        };
        ajaxData(data,cb);
    }
}
