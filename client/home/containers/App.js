import React, {Component} from 'react'
import SectionMain from '../components/SectionMain'
import styles from '../sass/App'
import {connect} from 'react-redux'
import * as actions from '../actions/';

class App extends Component {
    constructor() {
        super()
    }

    componentWillMount(){
        const {init} = this.props;
        init();
    }

    render() {
        let {...rest} = this.props;
        console.log(rest.data);
        return (
            <div className={styles.app}>
                <SectionMain
                    data = {rest.data}
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    data:state.home
})

const mapDispatchToProps = dispatch => ({
    init:() => {
        dispatch(actions.homeInit());
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
