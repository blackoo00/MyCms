import React from 'react'
import {Button, Col, FormControl, FormGroup} from 'react-bootstrap'

const App = ({list = [],change,add,del}) => (
    <div>
        {list.map((item,index) => (
            <FormGroup key={'prod-property-'+index}>
                <Col sm={3}>
                    <FormControl type="text" placeholder="属性名" value={item.name} data-key={'name'} data-index={index} onChange={change}/>
                </Col>
                <Col sm={3}>
                    <FormControl type="text" placeholder="属性值" value={item.detail} data-key={'detail'} data-index={index} onChange={change}/>
                </Col>
                <Col sm={1}>
                    <Button onClick={del} data-index={index}>
                        -
                    </Button>
                </Col>
                {index == list.length - 1 ?
                    <Col sm={1}>
                        <Button onClick={add}>
                            +
                        </Button>
                    </Col> : ''}
            </FormGroup>
        ))}
        {list.length == 0 ? <Col sm={1}>
            <Button onClick={add}>
                +
            </Button>
        </Col> : ''}
    </div>
)

export default App
