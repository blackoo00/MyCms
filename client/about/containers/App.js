import React, {Component} from 'react'

let ws;

class App extends Component{
    constructor(){
        super();
    }
    componentDidMount(){
        // 连接服务端，workerman.net:2120换成实际部署web-msg-sender服务的域名或者ip
        const socket = io('http://127.0.0.1:2120');
        // uid可以是自己网站的用户id，以便针对uid推送以及统计在线人数
        const uid = 123;
        // socket连接后以uid登录
        socket.on('connect', function(){
            socket.emit('login', uid);
        });
        // 后端推送来消息时
        socket.on('new_msg', function(msg){
            console.log("收到消息："+msg);
        });
        // 后端推送来在线数据时
        socket.on('update_online_count', function(online_stat){
            console.log(online_stat);
        });
    }
    connect(){
        ws = new WebSocket("ws://localhost:2346");
        // 当socket连接打开时，输入用户名
        ws.onopen = this.onopen;
        // 当有消息时根据消息类型显示不同信息
        ws.onmessage = this.onmessage;
        ws.onclose = function() {
            console.log("连接关闭，定时重连");
            this.connect();
        };
        ws.onerror = function() {
            console.log("出现错误");
        };
    }
    onopen(){
        if(!name)
        {
            name = prompt('输入你的名字：', '');
            if(!name || name == 'null'){
                name = '游客';
            }
        }
        var login_data = '{"type":"login","client_name":"'+name.replace(/"/g, '\\"')+'","room_id":"房间1"}';
        console.log(login_data);
        ws.send(login_data);
    }
    // 服务端发来消息时
    onmessage(e)
    {
        const data = eval("("+e.data+")");
        switch(data['type']){
            // 服务端ping客户端
            case 'ping':
                ws.send('{"type":"pong"}');
                break;
            // 登录 更新用户列表
            case 'login':
                console.log(data);
                alert(data['data']);
        }
    }
    render(){
        return(
            <div>123</div>
        )
    }
}

export default App;
