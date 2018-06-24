import React, { Component } from 'react';
import { observer } from "mobx-react"



@observer
export default class Pure extends Component {
	
	render(){
		const {modal} = this.props;
		return (
			
            <button id='demo6' data-options='{"type":"month"}' className="btn mui-btn mui-btn-block">
            	选择月份 ...
        	</button>
	        
		)
	}
}