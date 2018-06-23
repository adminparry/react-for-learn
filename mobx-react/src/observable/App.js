import { observable, computed } from "mobx";


var timerData = observable({
    secondsPassed: 0,
    // 默认定时器状态
    startState:false,
});



export default timerData
