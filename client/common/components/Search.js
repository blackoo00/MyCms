import React from 'react'
import {FormControl, FormGroup, Navbar} from 'react-bootstrap'

const App = ({title = '搜索',search,placeholder = '请输入关键词'}) => (
    <Navbar>
        <Navbar.Header>
            <Navbar.Brand>
                <a href="#">{title}</a>
            </Navbar.Brand>
            <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
            <Navbar.Form pullLeft>
                <FormGroup>
                    <FormControl type="text" onChange={search} placeholder={placeholder}/>
                </FormGroup>
                {' '}
            </Navbar.Form>
        </Navbar.Collapse>
    </Navbar>
)

export default App
