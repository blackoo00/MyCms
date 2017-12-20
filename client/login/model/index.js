import model from '../../shared/model';

export default {
    login:(aData) => {
        const options = {
            url:'token/app',
            type:'post',
            data:aData
        };
        return new Promise(resolve => {
            model.ajaxData(options).then(data => {
                resolve(data.token);
            })
        })
    }
}
