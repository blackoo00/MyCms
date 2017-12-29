import React from 'react'
import {Col, ControlLabel, FormGroup} from 'react-bootstrap'

const App = ({sm1 = 2,sm2 = 10,children,name}) => (
    <FormGroup validationState="success">
        <Col componentClass={ControlLabel} sm={sm1}>
            {name}
        </Col>
        <Col sm={sm2}>
            {children}
        </Col>
    </FormGroup>
)

export default App
