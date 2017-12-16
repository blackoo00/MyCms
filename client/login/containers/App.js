import React, {Component} from 'react';
import {connect} from 'react-redux';
import Login from '../components/';
import * as actions from '../actions/'

class App extends Component {
	componentWillMount(){
		console.log(1);
	}

	render(){
		const {...rest} = this.props;
		return(
			<div>
				<Login
					login = {rest.login}
				/>
			</div>
		)
	}
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
	login:() => {
		dispatch(actions.Login());
	}
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App)