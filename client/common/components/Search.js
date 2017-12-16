import React from 'react';
import {Navbar,FormControl,FormGroup,Button} from 'react-bootstrap';

class App extends React.Component{
    handleSubmit(){
        let {search} = this.props;
        let key = this.searchInput.value;
        search(key);
    }
    render(){
        let {title} = this.props;
        return(
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">{title}</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Navbar.Form pullLeft>
                        <FormGroup>
                            <FormControl type="text" inputRef={ref => { this.searchInput = ref; }} placeholder="请输入关键词" />
                        </FormGroup>
                            {' '}
                        <Button type="submit" onClick = {this.handleSubmit.bind(this)}>搜索</Button>
                    </Navbar.Form>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default App
