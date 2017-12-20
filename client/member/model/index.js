import model from '../../shared/model';

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
