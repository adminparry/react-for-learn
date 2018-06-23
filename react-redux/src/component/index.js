import React, { Component } from 'react';
import PropTypes from 'prop-types'

import { Provider, connect } from 'react-redux'

import {addTodo} from '../action'


class Counter extends Component {
	render() {
	    const { state, onIncreaseClick } = this.props;

	    return (
	      <div>
	        <span>{state.count}</span>
	        <button onClick={onIncreaseClick}>Increase</button>
	      </div>
	    )
	  }
}


// Counter.propTypes = {
//   value: PropTypes.number.isRequired,
//   onIncreaseClick: PropTypes.func.isRequired
// }

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    state: state.count
  }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch({type:'increase'})
  }
}

// Connected Component

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)