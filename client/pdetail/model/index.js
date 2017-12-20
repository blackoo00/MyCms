import model from '../../shared/model';

export default{
    getDetail: (id) => {
        const options = {
            url:'prod/detail/' + id,
        };
        return new Promise(resolve => {
            model.ajaxData(options).then(res => {
                resolve(res);
            })
        })
    },
    updateData:(data) => {
        const options = {
            url:'prod/update',
            data:data,
            type:'post'
        };
        return new Promise(resolve => {
            model.ajaxData(options).then(res => {
                resolve(res);
            })
        })
    }
}
