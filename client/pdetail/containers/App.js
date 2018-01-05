import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions/'
import Logo from '../components/Logo'
import IsOnSale from '../components/IsOnSale'
import {Form} from 'react-bootstrap'
import BasicItem from '../components/basic-item'
import Save from '../components/save'
import Editor from '../components/editor-wysiwyg'
import FormItem from '../components/form-item'
import Property from '../components/property'
import AlertContainer from 'react-alert'

class App extends React.Component {
    componentWillMount() {
        let id = this.props.params.id
        let {init} = this.props
        init(id)
    }

    render() {
        let {...rest} = this.props;
        return (
            <div>
                <Form style={{padding: '15px'}} horizontal>
                    <FormItem name="商品" sm2={7}>
                        <BasicItem
                            value={rest.info.name}
                            dataItem="name"
                            change={(e) => {
                                rest.change(e.target.value, e.target.dataset.item)
                            }}
                        />
                    </FormItem>
                    <FormItem name="所属分类" sm2={7}>
                        <BasicItem
                            value={rest.info.cat_name}
                            readonly={true}
                        />
                    </FormItem>
                    <FormItem name="库存" sm2={7}>
                        <BasicItem
                            value={rest.info.stock}
                            dataItem="stock"
                            change={(e) => {
                                rest.change(e.target.value, e.target.dataset.item)
                            }}
                        />
                    </FormItem>
                    <FormItem name="属性" sm2={7}>
                        <Property
                            list = {rest.info.properties}
                            change ={(e) => {
                                rest.editProperty(e.target.dataset.index,e.target.dataset.key,e.target.value)
                            }}
                            add = {() => {rest.addProperty(rest.info.id)}}
                            del = {(e) => {rest.delProperty(e.target.dataset.index)}}
                        />
                    </FormItem>
                    {typeof window == 'undefined' ? '' :
                        <FormItem name="LOGO" sm2={7}>
                            <Logo
                                src={rest.info.main_img_url}
                                upload={src => rest.upload(src)}
                            />
                        </FormItem>
                    }
                    <FormItem name="上架" sm2={7}>
                        <IsOnSale
                            is_on_sale={rest.info.is_on_sale}
                            isOnSale={() => {
                                rest.isOnSale()
                            }}
                        />
                    </FormItem>
                    {(typeof window != 'undefined' && typeof rest.info.details != 'undefined') ?
                        <FormItem name="详情" sm2={7}>
                            <Editor
                                editCon={(con) => {
                                    rest.editCon(con)
                                }}
                                details={rest.info.details}
                            />
                        </FormItem>
                        : ''}
                    <Save
                        save={() => {
                            rest.save(rest.info, this.msg)
                        }}
                    />
                </Form>
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
    info: state.pdetail
})

const mapDispatchToProp = dispatch => ({
    init: (id) => {
        dispatch(actions.pdetailInit(id))
    },
    isOnSale: () => {
        dispatch(actions.isOnSale())
    },
    change: (value, item) => {
        dispatch(actions.editProdItem(item, value))
    },
    save: (info, msg) => {
        dispatch(actions.saveProd(info, msg))
    },
    //上传图片
    upload: (src) => {
        dispatch(actions.upload(src))
    },
    //编辑产品文档
    editCon: (con) => {
        dispatch(actions.editProCon(con))
    },
    editProperty:(index,key,value) => {
        dispatch(actions.editProperty(index,key,value));
    },
    addProperty:(product_id) => {
        dispatch(actions.addProperty(product_id));
    },
    delProperty:(index) => {
        console.log(index);
        dispatch(actions.delProperty(index));
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProp
)(App)
