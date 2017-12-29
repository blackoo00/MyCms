import React from 'react'
import FileUpload from 'react-fileupload'
import styles from '../sass/style.scss'
import CSSModules from 'react-css-modules'
import {Col, ControlLabel, FormGroup} from 'react-bootstrap'

class App extends React.Component{
    render(){
        let {src,upload} = this.props;
        let options = {
            baseUrl:'http://z.cn/api/cms/prod/up_prod_logo',
            requestHeaders:{
                token:localStorage.getItem('token')
            },
            chooseAndUpload: true,
            uploadSuccess : function(resp){
                console.log(resp);
                upload(resp);
            },
        };
        return(
            <FileUpload options={options}>
                <div styleName="logo-add" ref="chooseAndUpload">
                    <img src={src}/>
                </div>
            </FileUpload>
        )
    }
}

export default CSSModules(App,styles)
