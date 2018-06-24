import React, { Component } from 'react';

import { observer } from "mobx-react"

import timerData from '../observable/App2';

import $ from 'jquery'
import DtPicker from '../pureRender/DtPicker.jsx'

import '../mui/css/mui.picker.min.css';
import '../mui/css/app.css';

async function getMui(){
	window.mui = await import('../mui/js/mui.js');

	await import('../mui/js/mui.picker.min.js')

	return window.mui;
}

class TimerStarter extends Component {

  componentDidMount() {
  	var self = this;

  		getMui().then(mui=>{

  			console.log(mui.DtPicker)
  			var dtpicker = new mui.DtPicker({
			    type: "month",//设置日历初始视图模式 
			    beginDate: new Date(2015, '04', 25),//设置开始日期 
			    endDate: new Date(2026, '04', 25),//设置结束日期 
			    labels: ['Year', 'Mon', 'Day', 'Hour', 'min'],//设置默认标签区域提示语 
			    customData: { 
			        h: [
			            { value: 'AM', text: 'AM' },
			            { value: 'PM', text: 'PM' }
			        ] 
			    }//时间/日期别名 
			}) 

			$('#demo6').click(function(){
				dtpicker.show(function(e) {
				    console.log(e);
				}) 
			})
				
			
			

  		})
		
	}
	
	render(){
		return (
			<DtPicker ref="#pullrefresh" modal={timerData} />
		)
	}
}

export default TimerStarter
