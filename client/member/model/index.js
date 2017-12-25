import {Model} from '../../shared/model';
const model = new Model();

export default {
    getUserList:() => {
        const options = {
            url:'user/list'
        };
        return new Promise(resolve => {
            model.ajaxData(options).then(res => {
                resolve(res);
            })
        })
    }
}
