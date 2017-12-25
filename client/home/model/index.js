import {Model} from '../../shared/model';
var model = new Model()

export default {
    getUsers: () => {
        const options = {
            url: 'user/static',
        };
        return new Promise(resolve => {
            model.ajaxData(options).then(res => {
                resolve(res);
            })
        })
    },
    getProds:() => {
        const options = {
            url: 'prod/static'
        };
        return new Promise(resolve => {
            model.ajaxData(options).then(res => {
                resolve(res);
            })
        })
    },
    getOrders:() => {
        const options = {
            url:'order/static',
        };
        return new Promise(resolve => {
            model.ajaxData(options).then(res => {
                resolve(res);
            })
        })
    }
}
