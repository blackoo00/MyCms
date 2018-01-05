import React from 'react';
import * as actions from '../actions/';
import {connect} from 'react-redux';
import List from '../components/List';
import Pages from '../../common/components/Pages';
import Search from '../../common/components/Search';
import AlertContainer from 'react-alert'
import config from '../../shared/config';


class App extends React.Component{
    componentWillMount(){
        let {init} = this.props;
        init();
    }
    componentDidMount(){
        const that = this;
        let {init} = this.props;
        // 连接服务端，workerman.net:2120换成实际部署web-msg-sender服务的域名或者ip
        const socket = io(config.WORKERMANSERVER);
        // uid可以是自己网站的用户id，以便针对uid推送以及统计在线人数
        const uid = 123;
        // socket连接后以uid登录
        socket.on('connect', function(){
            socket.emit('login', uid);
        });
        // 后端推送来消息时
        socket.on('new_msg', function(msg){
            console.log("收到消息："+msg);
            that.msg.show('您有新的订单', {
                time: 2000,
                type: 'success',
            });
        });
        // 后端推送来在线数据时
        socket.on('update_online_count', function(online_stat){
            console.log(online_stat);
        });
    }
    render(){
        let {...rest} = this.props;
        return(
            <div>
                <Search
                    search = {(e) => rest.search(e.target.value)}
                    placeholder = {'请输入订单编号'}
                />
                <a href={config.WORKERMANLINK + "/?type=publish"} target="_blank">测试前端下订单的实时交互(刷新那个弹出页面)</a>
                <List
                    list = {rest.data.showlist}
                />
                <Pages
                    items = {rest.data.search_key ? rest.data.search_items : rest.data.items}
                    activePage = {rest.data.search_key ? rest.data.search_activePage : rest.data.activePage}
                    maxButtons = {rest.data.search_key ? rest.data.search_maxButtons : rest.data.maxButtons}
                    handleSelect = {(eventKey) => rest.page(eventKey,rest.data.list,rest.data.search_key)}
                />
                <AlertContainer ref={a => this.msg = a} {...{
                    offset: 14,
                    position: 'bottom left',
                    theme: 'dark',
                    time: 5000,
                    transition: 'scale'
                }}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    data:state.orders
})

const mapDispatchToProps = dispatch => ({
    init:() => {
        dispatch(actions.Init());
    },
    page:(page,list,key) => {
        dispatch(actions.orderPage(page,list,key))
    },
    search:(key) => {
        dispatch(actions.orderSearch(key))
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
