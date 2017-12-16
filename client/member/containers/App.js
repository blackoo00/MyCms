import React, {Component} from 'react'
import SectionMain from '../components/SectionMain'
import styles from '../sass/App'
import {connect} from 'react-redux'
import  * as actions from '../actions/';

class App extends Component {
    constructor() {
        super()
    }

    componentWillMount(){
        let {init} = this.props;
        init();
    }

    render() {
        const {list} = this.props

        return (
            <div className={styles.app}>
                <SectionMain list={list}></SectionMain>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    list:state.member.list
})

const mapDispatchToProps = dispatch => ({
    init:() => {
        dispatch(actions.init());
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
