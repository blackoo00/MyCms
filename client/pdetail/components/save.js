import React from 'react';
import {Button, Col, FormGroup} from 'react-bootstrap';

const App = ({sm = 10,save}) => (
    <FormGroup>
        <Col sm={2}>

        </Col>
        <Col sm={sm}>
            <Button onClick={save}>
                保存
            </Button>
        </Col>
    </FormGroup>
);

export default App;
