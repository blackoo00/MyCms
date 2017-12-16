import React from 'react';
import Cats from '../components/Cats';
import * as actions from '../actions/';
import {connect} from 'react-redux';
import Pages from '../../common/components/Pages';

class App extends React.Component{
    componentWillMount(){
        let {init} = this.props;
        init();
    }
    render(){
        let {...rest} = this.props;
        return(
            <div>
                <Cats
                    list = {rest.showlist}
                />
                <Pages
                    items = {rest.items}
                    activePage = {rest.activePage}
                    maxButtons = {rest.maxButtons}
                    handleSelect = {(eventKey) => rest.page(eventKey,rest.list)}
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    showlist:state.cats.showlist,
    list:state.cats.list,
    items:state.cats.items,
    activePage:state.cats.activePage,
    maxButtons:state.cats.maxButtons,
})

const mapDispatchToProps = dispatch => ({
    init:() => {
        dispatch(actions.init());
    },
    page:(page,list) => {
        dispatch(actions.catsPage(page,list))
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
