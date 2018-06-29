import React, { Component } from 'react';
import { observer } from "mobx-react"
import '../css/timerStarter.css'

@observer
export default class Pure extends Component {
	
	render(){
		const {modal} = this.props;
		return (
			<div className="div">
				<span>Seconds passed: { modal.secondsPassed } </span>
	    		<button onClick={modal.startOpenTime.bind(modal)}>{modal.startStateText}</button>
			</div>
		)
	}
}