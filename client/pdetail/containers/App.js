import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/';
import Logo from '../components/Logo';
import IsOnSale from '../components/IsOnSale';
import {Form} from 'react-bootstrap';
import BasicItem from '../components/basic-item';
import Save from '../components/save';

class App extends React.Component {
    componentWillMount() {
        let id = this.props.params.id;
        let {init} = this.props;
        init(id);
    }

    render() {
        let {...rest} = this.props;
        return (
            <div>
                {Object.keys(rest.info).length == 0 ? '' :
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
                        <Save
                            save={() => {
                                rest.save(rest.info)
                            }}
                        />
                    </Form>
                }
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
    change: (value, item, info) => {
        dispatch(actions.editProdItem(item, value));
    },
    save: (info) => {
        dispatch(actions.saveProd(info))
    },
    //上传图片
    upload: (src) => {
        dispatch(actions.upload(src));
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProp
)(App)
