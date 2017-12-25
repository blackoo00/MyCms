import React from 'react';
import {Col, ControlLabel, FormControl, FormGroup} from 'react-bootstrap';

const App = ({name,value,change,sm = 7,dataItem,readonly = false}) => (
    <FormGroup validationState="success">
        <Col componentClass={ControlLabel} sm={2}>
            {name}
        </Col>
        <Col sm={sm}>
            <FormControl
                type="text"
                placeholder={value || ''}
                data-item={dataItem}
                value={value || ''}
                onChange={change}
                readOnly = {readonly}
            />
        </Col>
    </FormGroup>
)

export default App
