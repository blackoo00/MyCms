import React from 'react'
import FileUpload from 'react-fileupload'
import styles from '../sass/style.scss';
import CSSModules from 'react-css-modules';

class App extends React.Component{
    render(){
        let {src,upload} = this.props;
        let options = {
            baseUrl:'http://127.0.0.1/my-store/index.php/Back/Store/uploadFile',
            chooseAndUpload: true,
            uploadSuccess : function(resp){
                console.log(resp);
                upload(resp.data);
            },
        }
        return(
            <div>
                <FileUpload options={options}>
                    <div styleName="logo-add" ref="chooseAndUpload">
                        <img src={src}/>
                    </div>
                </FileUpload>
            </div>
        )
    }
}

export default CSSModules(App,styles)
