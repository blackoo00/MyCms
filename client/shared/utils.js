import request from 'superagent'

function newAjax(options){
    return new Promise(resolve => {
        if(options.type == 'post'){
            request.post(options.url)
                .send(options.data)
                .type('application/json')
                .set('token',localStorage.getItem('token'))
                .then(res => {
                    resolve(res.body);
                },err => {
                    console.log(err);
                })
        }else{
            request.get(options.url)
                .query(options.data)
                .set('token',localStorage.getItem('token'))
                .then(res => {
                    resolve(res.body);
                },err => {
                    console.log(err);
                })
        }
    }).catch(err =>{
        console.log(err);
    })
}

/**
 * @param  {Object} options
 * @return {Object}         Return Promise
 */
function ajax(options) {
    const defaults = {
        url: null,
        type: 'post',
        data: {},
    }
    let promise, action

    options = Object.assign({}, defaults, options)
    promise = request[options.type](options.url)
    // .withCredentials()
    Object.keys(options).forEach(key => {
        if (!key.match(/url|type|data/)) {
            promise.set(key, options[key])
        }
    })
    promise.type('application/json')
    action = options.type === 'get' ? 'query' : 'send'
    return new Promise(resolve => {
        promise[action](options.data).type('form').then(res => {
            resolve(res.body)
        }).catch(err => {
            console.log(err)
        })
    })
}

/**
 * @return {Object} Return url params
 */
function getURLParams() {
    const search = location.search.slice(1),
        rParam = /([^&]*)=([^&]*)/g
    let ret = {},
        param

    while (param = rParam.exec(search)) {
        ret[param[1]] = param[2]
    }

    return ret
}

export default {
    ajax,
    getURLParams,
    newAjax
}
