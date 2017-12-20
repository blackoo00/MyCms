import React from 'react';
import Editor from 'react-umeditor';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            content: ""
        }
    }
    handleChange(content){
        console.log(content);
        this.setState({
            content: content
        })
    }
    getIcons(){
        var icons = [
            "source | undo redo | bold italic underline strikethrough fontborder emphasis | ",
            "paragraph fontfamily fontsize | superscript subscript | ",
            "forecolor backcolor | removeformat | insertorderedlist insertunorderedlist | selectall | ",
            "cleardoc  | indent outdent | justifyleft justifycenter justifyright | touppercase tolowercase | ",
            "horizontal date time  | image emotion spechars | inserttable"
        ]
        return icons;
    }
    getPlugins(){
        return {
            "image": {
                "uploader": {
                    "name":"file",
                    "url": "/api/upload"
                }
            }
        }
    }
    render(){
        var icons = this.getIcons();
        var plugins = this.getPlugins();
        return (
            <div>
            <Editor ref="editor"
                        icons={icons}
                        value={this.state.content} defaultValue="<p>React Umeditor</p>"
                        onChange={this.handleChange.bind(this)}
                        plugins={plugins}
            />
            </div>
        )
    }
}

export default App
