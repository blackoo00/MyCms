import React from 'react';
import {FormGroup,Col,ControlLabel,Checkbox} from 'react-bootstrap';

const App = ({is_on_sale,isOnSale}) => (
    <div>
        <FormGroup validationState="success">
            <Col componentClass={ControlLabel} sm={2}>
                是否上架
            </Col>
            <Col sm={10}>
                <Checkbox inline checked={is_on_sale == 1} onChange={isOnSale}>
                    是
                </Checkbox>
                <Checkbox inline checked={is_on_sale == 0} onChange={isOnSale}>
                    否
                </Checkbox>
            </Col>
        </FormGroup>
    </div>
)

export default App
