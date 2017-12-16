import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/';
import Pdetail from '../components/';
import FileUpload from 'react-fileupload';
import Logo from '../components/Logo';
import Attr from '../components/Attr';
import Spec from '../components/Spec';
import IsOnSale from '../components/IsOnSale';
import Editor from '../components/Editor';


class App extends React.Component{
    componentWillMount(){
        let id = this.props.params.id;
        let {init} = this.props;
        init(id);
    }
    render(){
        let {...rest} = this.props;
        return(
            <div>
                {Object.keys(rest.info).length == 0 ? '' :
                    <Pdetail
                        info = {rest.info}
                        attr = {rest.attr}
                        change = {(e) =>{rest.change(e.target.value,e.target.dataset.item)}}
                        save = {() =>{rest.save(rest.info,rest.attr)}}
                        chooseAttr = {(e) =>{rest.chooseAttr(e)}}
                        upload = {(e) => rest.upload(e)}
                        isOnSale = {() => rest.isOnSale()}
                    >
                        {typeof window == "undefined" ? '' :
                            <Logo
                                src = {rest.info.logo}
                                upload = {src => rest.upload(src)}
                            />
                        }
                        <Attr
                            attr = {rest.attr}
                            spec = {rest.info.spec}
                            attrPrice = {(e) => {rest.attrPrice(e.target.dataset.index,e.target.dataset.name,e.target.value)}}
                        />
                        <Spec
                            spec = {rest.info.spec}
                            choose_id = {rest.attr.choose_id}
                            chooseAttr = {(e) => {rest.chooseAttr(e)}}
                        />
                        <IsOnSale
                            is_on_sale = {rest.info.is_on_sale}
                            isOnSale = {() => {rest.isOnSale()}}
                        />
                        {typeof document == "undefined" ? '' :
                            <Editor
                                content = {{__html: rest.info.desc}['__html']}
                                editCon = {content => {rest.editCon(content)}}
                            />
                        }
                    </Pdetail>
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    info:state.pdetail,
    attr:state.attr,
})

const mapDispatchToProp = dispatch => ({
    init:(id) => {
        dispatch(actions.pdetailInit(id))
    },
    isOnSale:() => {
        dispatch(actions.isOnSale());
    },
    change:(value,item,info) => {
        dispatch(actions.editProdItem(item,value));
    },
    save:(info,attr) => {
        if(attr.choose.length != 0){
            const data = {
                'choose' :attr.choose,
                'choose_id' :attr.choose_id,
            }
            info['detail'] = data;
        }
        // console.log(info);
        dispatch(actions.saveProd(info))
    },
    chooseAttr:(e) => {
        const aid = e.target.dataset.aid;
        dispatch(actions.chooseAttr(aid));
    },
    attrPrice:(index,value_name,value) => {
        dispatch(actions.attrValue(index,value_name,value));
    },
    //上传图片
    upload:(src) => {
        dispatch(actions.upload(src));
    },
    //编辑产品文档
    editCon:(con) => {
        dispatch(actions.editProCon(con))
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProp
)(App)
