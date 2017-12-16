import React from 'react';
import {FormGroup,Col,Table,FormControl,ControlLabel} from 'react-bootstrap';

const App = ({attr,spec,attrPrice}) => (
    <div>
        {attr.choose.length == 0 ? '' :
            <FormGroup>
                <Col componentClass={ControlLabel} sm={2}>
                    属性
                </Col>
                <Col sm={10}>
                    <Table responsive>
                        <thead>
                            <tr>
                                {spec.map(item => (
                                    <th key={item.id}>{item.value}</th>
                                ))}
                              <th>库存</th>
                              <th>价格</th>
                            </tr>
                        </thead>
                        <tbody>
                            {attr.choose.map((item,index) => (
                                <tr key={index + 'choose'}>
                                    {item.attr.map((item2,index) =>(
                                        <td key={index + 'attr'}>{attr.all[item2].value}</td>
                                    ))}
                                    <td>
                                        <FormControl
                                            bsSize="small"
                                            type="text"
                                            value={item.number}
                                            placeholder="0"
                                            data-name = {'number'}
                                            data-index = {index}
                                            onChange={attrPrice}
                                        />
                                    </td>
                                    <td>
                                        <FormControl
                                            bsSize="small"
                                            type="text"
                                            value={item.price}
                                            placeholder="0"
                                            data-name = {'price'}
                                            data-index = {index}
                                            onChange={attrPrice}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                      </Table>
                  </Col>
            </FormGroup>
        }
    </div>
)

export default App
