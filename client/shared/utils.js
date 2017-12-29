import request from 'superagent'
import {browserHistory} from 'react-router';

class Utils{
    newAjax(options,msg) {
        return new Promise(resolve => {
            if (options.type == 'post') {
                request.post(options.url)
                    .send(options.data)
                    .type('application/json')
                    .set('token', typeof window != 'undefined' ? localStorage.getItem('token') : '')
                    .then(res => {
                        resolve(res.body);
                    })
                    .catch(err => {
                        if (err.response.status == 401 && typeof window != 'undefined') {
                            if (window.confirm(err.response.body.msg)) {
                                browserHistory.push('/login');
                            }
                        }
                        msg.show(err.response.body.msg, {
                            time: 2000,
                            type: 'error',
                        });
                        console.log(err)
                    });
            } else {
                request.get(options.url)
                    .query(options.data)
                    .set('token', typeof window != 'undefined' ? localStorage.getItem('token') : '')
                    .then(res => {
                        console.log(res.body);
                        resolve(res.body);
                    }, err => {
                        if (err.response.status == 401 && typeof window != 'undefined') {
                            if (window.confirm(err.response.body.msg)) {
                                browserHistory.push('/login');
                            }
                        }
                        msg.show(err.response.body.msg, {
                            time: 2000,
                            type: 'error',
                        });
                        console.log(err);
                    })
            }
        }).catch(err => {
            console.log(err);
        })
    }

    copyObjectByKeys(keys = [], source = {}) {
        let data = {};
        keys.forEach(key => {
            data[key] = source[key];
        });
        return data;
    }

    getURLParams() {
        const search = location.search.slice(1),
            rParam = /([^&]*)=([^&]*)/g
        let ret = {},
            param

        while (param = rParam.exec(search)) {
            ret[param[1]] = param[2]
        }

        return ret
    }
}

export {Utils}
