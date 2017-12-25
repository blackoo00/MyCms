import React, {Children, Component, cloneElement} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import actions from '../actions'
import styles from '../sass/Common'
import '../sass/global'

class Common extends Component {
    constructor() {
        super()
    }

    render() {
        const {children, ...props} = this.props
        let account = '游客';
        if(typeof window != 'undefined'){
            account = localStorage.getItem('account');
        }
        return (
            <div className={styles.app}>
                <Header
                account = {account}
                />
                <Navbar/>
                <Main>
                    {Children.map(children, child =>
                        cloneElement(child, {...props})
                    )}
                </Main>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Common)
