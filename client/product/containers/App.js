import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/';
import List from '../components/List';
import Pages from '../../common/components/Pages';
import Search from '../../common/components/Search';

class App extends React.Component{
    componentWillMount(){
        const cid = this.props.params.cid;
        let {init} = this.props;
        init();
    }

    render(){
        let {...rest} = this.props;
        return(
            <div>
                <Search
                    search = {(key) => rest.search(key)}
                    title ={'产品'}
                />
                <List
                    list = {rest.data.showlist}
                />
                <Pages
                    items = {rest.data.search_key ? rest.data.search_items : rest.data.items}
                    activePage = {rest.data.search_key ? rest.data.search_activePage : rest.data.activePage}
                    maxButtons = {rest.data.search_key ? rest.data.search_maxButtons : rest.data.maxButtons}
                    handleSelect = {(eventKey) => rest.page(eventKey,rest.data.list,rest.data.search_key)}
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    data:state.product,
});

const mapDispatchToProps = dispatch => ({
    init:() => {
        dispatch(actions.init());
    },
    page:(page,list,key) => {
        dispatch(actions.prodPage(page,list,key))
    },
    search:(key) => {
        dispatch(actions.prodSearch(key))
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
