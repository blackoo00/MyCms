import React from 'react';
import Editor from 'react-umeditor';
import {Button, Col, FormGroup} from 'react-bootstrap';

const App = ({children}) => (
    <FormGroup>
        <Col sm={2}>

        </Col>
        <Col sm={10}>
            {children}
        </Col>
    </FormGroup>
)

export default App
