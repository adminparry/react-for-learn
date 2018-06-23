import React, { Component } from 'react';
import { Provider, connect } from 'react-redux'
import { createStore , combineReducers} from 'redux'

import {injectReducer,store} from '../reducer';
// import fuck,{key} from '../reducer/fuck';

// injectReducer(store, { key, fuck });


class InputCounter extends Component {
	mapStateToProps(state){
		return {
		    count: state.count,
		    fuck: state.fuck
	  	}
	}
	mapDispatchToProps(dispatch) {
	  return {
	    onIncreaseClick: (ev) => dispatch({type:'input',value:ev.target.value})
	  }
	}
	
	render(){
		const { count, onIncreaseClick } = this.props;
		console.log(this.props)
		return (
			<div>
				
				<input type="text" value={count.count}  onChange={onIncreaseClick}/>
			</div>
		)
	}
}



export default connect(
  InputCounter.prototype.mapStateToProps,
  InputCounter.prototype.mapDispatchToProps
)(InputCounter)
