// Hook for server
if (typeof require.ensure !== 'function') {
    require.ensure = function(dependencies, callback) {
        callback(require)
    }
}

const routes = {
    childRoutes: [{
        path:'/login',
        indexRoute: {
            getComponent(nextState, callback) {
                require.ensure([], require => {
                    callback(null, require('./login/containers/App'))
                }, 'login')
            }
        }
    },{
        path: '/',
        component: require('./common/containers/Root'),
        indexRoute: {
            getComponent(nextState, callback) {
                require.ensure([], require => {
                    callback(null, require('./home/containers/App'))
                }, 'home')
            }
        },
        childRoutes: [{
            path: 'member',
            getComponent(nextState, callback) {
                require.ensure([], require => {
                    callback(null, require('./member/containers/App'))
                }, 'member')
            }
        },{
            path: 'product/:cid',
            getComponent(nextState, callback) {
                require.ensure([], require => {
                    callback(null, require('./product/containers/App'))
                }, 'product')
            }
        },{
            path: 'cats',
            getComponent(nextState, callback) {
                require.ensure([], require => {
                    callback(null, require('./cats/containers/App'))
                }, 'cats')
            }
        },{
            path: 'orders',
            getComponent(nextState, callback) {
                require.ensure([], require => {
                    callback(null, require('./orders/containers/App'))
                }, 'orders')
            }
        },{
            path: 'pdetail/:id',
            getComponent(nextState, callback) {
                    require.ensure([], require => {
                        callback(null, require('./pdetail/containers/App'))
                    }, 'pdetail')
            }
        },{
            path: 'explore',
            getComponent(nextState, callback) {
                require.ensure([], require => {
                    callback(null, require('./explore/containers/App'))
                }, 'explore')
            }
        }, {
            path: 'about',
            getComponent(nextState, callback) {
                require.ensure([], require => {
                    callback(null, require('./about/containers/App'))
                }, 'about')
            }
        }]
    }]
}

export default routes
