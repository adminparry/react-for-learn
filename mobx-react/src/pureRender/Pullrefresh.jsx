import React, { Component } from 'react';
import { observer } from "mobx-react"



@observer
export default class Pure extends Component {
	
	render(){
		const {modal} = this.props;
		return (
			
            <div id="pullrefresh" className="mui-content mui-scroll-wrapper">
              <div className="mui-scroll">
               
                <ul className="mui-table-view mui-table-view-chevron"></ul>
              </div>
            </div>
	        
		)
	}
}