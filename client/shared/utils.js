import request from 'superagent'

function myPost(options) {
    return new Promise(resolve => {
        request.post(options.url)
            .send(options.data)
            .type('application/json')
            .then(res => {
                // console.log(res)
                // console.log(res.body.token)
                if(res.body.token && ! localStorage.getItem('token')){
                    localStorage.setItem('token',res.body.token);
                }
                console.log(localStorage.getItem('token'));
            },err => {
                console.log(err);
            })
            // .end(function(res){
            //     console.log(res);
            //     console.log(res.body);
            //     if(res.ok){
            //         resolve(res);
            //     }else{
            //         console.log(res);
            //     }
            // })
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
    myPost
}
