import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/';
import Logo from '../components/Logo';
import IsOnSale from '../components/IsOnSale';
import {Form} from 'react-bootstrap';
import BasicItem from '../components/basic-item';
import Save from '../components/save';
import EditorCom from '../components/editor';
import Editor from 'react-umeditor';

class App extends React.Component {
    componentWillMount() {
        let id = this.props.params.id;
        let {init} = this.props;
        init(id);
    }
    componentDidMount(){
        // location.reload();
    }

    getQiniuUploader() {
            return {
                url: 'http://upload.qiniu.com',
                type: 'qiniu',
                name: "file",
                request: "image_src",
                qiniu: {
                    app: {
                        Bucket: "liuhong1happy",
                        AK: "l9vEBNTqrz7H03S-SC0qxNWmf0K8amqP6MeYHNni",
                        SK: "eizTTxuA0Kq1YSe2SRdOexJ-tjwGpRnzztsSrLKj"
                    },
                    domain: "http://o9sa2vijj.bkt.clouddn.com",
                    genKey: function (options) {
                        return options.file.type + "-" + options.file.size + "-" + options.file.lastModifiedDate.valueOf() + "-" + new Date().valueOf() + "-" + options.file.name;
                    }
                }
            }
    }

    render() {
        let {...rest} = this.props;
        var uploader = this.getQiniuUploader();
        var plugins = {
            image: {
                uploader: uploader
            }
        }
        return (
            <div>
                <Form style={{padding: '15px'}} horizontal>
                    <BasicItem
                        name="商品"
                        value={rest.info.name}
                        dataItem="name"
                        change={(e) => {
                            rest.change(e.target.value, e.target.dataset.item)
                        }}
                    />
                    <BasicItem
                        name="所属分类"
                        value={rest.info.cat_name}
                        readonly={true}
                    />
                    <BasicItem
                        name="库存"
                        value={rest.info.stock}
                        dataItem="number"
                        change={(e) => {
                            rest.change(e.target.value, e.target.dataset.item)
                        }}
                    />
                    {typeof window == "undefined" ? '' :
                        <Logo
                            src={rest.info.main_img_url}
                            upload={src => rest.upload(src)}
                        />
                    }
                    <IsOnSale
                        is_on_sale={rest.info.is_on_sale}
                        isOnSale={() => {
                            rest.isOnSale()
                        }}
                    />
                    <EditorCom>
                        <Editor ref="editor"
                                icons={rest.info.editor_icons}
                                value={rest.info.editor_con}
                                defaultValue=""
                                onChange={rest.editCon}
                                plugins={plugins}/>
                    </EditorCom>
                    <Save
                        save={() => {
                            rest.save(rest.info)
                        }}
                    />
                </Form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    info: state.pdetail,
});

const mapDispatchToProp = dispatch => ({
    init: (id) => {
        dispatch(actions.pdetailInit(id))
    },
    isOnSale: () => {
        dispatch(actions.isOnSale());
    },
    change: (value, item) => {
        dispatch(actions.editProdItem(item, value));
    },
    save: (info) => {
        dispatch(actions.saveProd(info))
    },
    //上传图片
    upload: (src) => {
        dispatch(actions.upload(src));
    },
    //编辑产品文档
    editCon:(con) => {
        console.log(con );
        dispatch(actions.editProCon(con))
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProp
)(App)
