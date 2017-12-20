import model from '../../shared/model';

export default {
    getList:(page = 1) => {
        const options = {
            url:'/cats/list',
            data:{page:page}
        };
        return new Promise(resolve => {
            model.ajaxData(options).then(res => {
                let data = {};
                data.items = res.last_page;
                data.showlist = res.data;
                resolve(data);
            })
        })
    }
}
