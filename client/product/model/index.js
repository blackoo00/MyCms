import {Model} from '../../shared/model';
const model = new Model();

export default{
    getList:(page = 1,key = '',cid) => {
        const options = {
            url:'prod/list',
            data:{page:page,key:key,cid:cid}
        };
        return new Promise(resolve => {
            model.ajaxData(options).then(res => {
                resolve(res);
            })
        })
    }
}
