import React from 'react';
import {Form,FormControl,FormGroup,ControlLabel,Button,Col,Checkbox} from 'react-bootstrap';
import styles from '../sass/style.scss';
import CSSModules from 'react-css-modules';
import FileInput from 'react-file-input';

const App = ({info,change,save,chooseAttr,children,sm=10}) => (
    <Form styleName="pdetail-form" horizontal>
        <FormGroup validationState="success">
            <Col componentClass={ControlLabel} sm={2}>
                商品
            </Col>
            <Col sm={sm}>
                <FormControl
                    type="text"
                    placeholder={info.name||""}
                    data-item={'name'}
                    value={info.name||""}
                    onChange={change}
                />
            </Col>
        </FormGroup>
        <FormGroup validationState="success">
            <Col componentClass={ControlLabel} sm={2}>
                所属分类
            </Col>
            <Col sm={sm}>
                <FormControl
                    type="text"
                    placeholder={info.cat.name||""}
                    value={info.cat.name||""}
                    readOnly
                />
            </Col>
        </FormGroup>
        {children[2]}
        {children[1]}
        <FormGroup validationState="success">
            <Col componentClass={ControlLabel} sm={2}>
                LOGO
            </Col>
            <Col sm={sm}>
                {children[0]}
            </Col>
        </FormGroup>
        <FormGroup validationState="success">
            <Col componentClass={ControlLabel} sm={2}>
                库存
            </Col>
            <Col sm={sm}>
                <FormControl
                    type="text"
                    placeholder={info.number||""}
                    value={info.number||""}
                    data-item={'number'}
                    onChange={change}
                />
            </Col>
        </FormGroup>
        {children[3]}
        <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
                详情
            </Col>
            <Col sm={sm}>
                {children[4]}
            </Col>
        </FormGroup>
        <FormGroup>
            <Col sm={2}>

            </Col>
            <Col sm={sm}>
                <Button onClick={save}>
                    保存
                </Button>
            </Col>
        </FormGroup>
    </Form>
)

export default CSSModules(App,styles)
