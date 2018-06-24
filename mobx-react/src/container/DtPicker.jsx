import React, { Component } from 'react';

import { observer } from "mobx-react"

import timerData from '../observable/App2';


import DtPicker from '../pureRender/DtPicker.jsx'



class TimerStarter extends Component {

  componentDidMount() {
  		
		// var dtpicker = new mui.DtPicker({
		//     type: "datetime",//设置日历初始视图模式 
		//     beginDate: new Date(2015, '04', 25),//设置开始日期 
		//     endDate: new Date(2016, '04', 25),//设置结束日期 
		//     labels: ['Year', 'Mon', 'Day', 'Hour', 'min'],//设置默认标签区域提示语 
		//     customData: { 
		//         h: [
		//             { value: 'AM', text: 'AM' },
		//             { value: 'PM', text: 'PM' }
		//         ] 
		//     }//时间/日期别名 
		// }) 
		// dtpicker.show(function(e) {
		//     console.log(e);
		// }) 
	}

	render(){
		return (
			<DtPicker ref="#pullrefresh" modal={timerData} />
		)
	}
}

export default TimerStarter
