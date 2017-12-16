import React from 'react';
import Login from '../img/logo.png';
import '../sass/style.css';

const App = ({login}) => (
	<div>
        <div className="login-view">
            <div className="login-wrapper">
                <div className="login-box">
                    <div className="login-title">
                        <div className="company-name">
                            <img src={Login}/>
                                <span>零食商贩</span>
                        </div>
                        <div className="systme-name">
                            <span>Snack Petty Vendor</span>
                        </div>
                    </div>
                    <div className="login-form">
                        <div className="form-group form-input">
                            <input type="text" className="normal-input" id="user-name" placeholder="用户名"/>
                                <div className="common-error-tips"><div></div></div>
                        </div>
                        <div className="form-group form-input">
                            <input type="password" className="normal-input" id="user-pwd" placeholder="密码"/>
                                <div className="common-error-tips"><div></div></div>
                        </div>
                        <div className="form-group form-btn">
                            <input type="button" onClick={login} className="normal-btn" id="login" value="登录"/>
                        </div>
                        <div className="form-group form-forget">
                            <label className="error-tips">登录失败</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	</div>
)

export default App
