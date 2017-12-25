import React from 'react';
import {Col, ControlLabel, FormGroup} from 'react-bootstrap';

const App = ({children,sm = 7}) => (
    <FormGroup>
        <Col componentClass={ControlLabel} sm={2}>
            商品详情
        </Col>
        <Col sm={sm}>
            {children}
        </Col>
    </FormGroup>
)

export default App
