import React, { Component } from 'react';

import { observer } from "mobx-react"

import timerData from '../observable/App2';


import PureRenderTimerStarter from '../pureRender/TimerStarter.jsx'


class TimerStarter extends Component {

  componentDidMount() {
    timerData.receiveCalcData();

  }

	render(){
		return (
			<PureRenderTimerStarter modal={timerData} />
		)
	}
}

export default TimerStarter
