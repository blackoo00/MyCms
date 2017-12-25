import React, {Component} from 'react';
import {connect} from 'react-redux';
import Login from '../components/';
import * as actions from '../actions/'

class App extends Component {
	componentWillMount(){
	}

	render(){
		const {...rest} = this.props;
		return(
			<div>
				<Login
					login = {() => {rest.login(rest.ac,rest.se)}}
                    handleAccount = {e => {rest.handleAccount(e.target.value)}}
                    handlePassword = {e => {rest.handlePassword(e.target.value)}}
                    ac = {rest.ac}
                    se = {rest.se}
				/>
			</div>
		)
	}
}

const mapStateToProps = state => ({
    ac:state.login.ac,
    se:state.login.se
})

const mapDispatchToProps = dispatch => ({
	login:(ac,se) => {
	    console.log(1);
		dispatch(actions.Login(ac,se));
	},
    handleAccount:value => {
        dispatch(actions.handleAccount(value))
    },
    handlePassword:value => {
        dispatch(actions.handlePassword(value))
    }
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App)
