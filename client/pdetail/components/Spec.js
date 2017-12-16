import React from 'react';
import {FormGroup,Col,Checkbox,ControlLabel} from 'react-bootstrap';

const App = ({spec,chooseAttr,choose_id}) => (
    <div>
        {spec.map(item => (
            <FormGroup key={item.id}>
                <Col componentClass={ControlLabel} sm={2}>
                    {item.value}
                </Col>
                <Col sm={10}>
                    {item.attr.map(item2 => (
                        (
                            <Checkbox inline key={item2.id} checked={choose_id.includes(item2.id)} data-sid={item.id} data-aid={item2.id} onChange={chooseAttr}>
                                {item2.value}
                            </Checkbox>
                        )
                    ))}
                </Col>
            </FormGroup>
        ))}
    </div>
)

export default App;
