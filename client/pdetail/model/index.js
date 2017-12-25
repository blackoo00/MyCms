import {Model} from '../../shared/model';
const model = new Model();

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
        let update_data = model.copyObjectByKeys(
            [
                'id',
                'name',
                'stock',
                'main_img_url',
                'is_on_sale',
                'details'
            ],data);
        const options = {
            url:'prod/update',
            data:update_data,
            type:'post'
        };
        return new Promise(resolve => {
            model.ajaxData(options).then(res => {
                resolve(res);
            })
        })
    }
}
