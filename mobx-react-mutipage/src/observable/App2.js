import { observable, computed ,action} from "mobx";

import $ from 'jquery';

class timerData {
    @observable 
    secondsPassed = 0;

    @observable 
    timer = null;

    @observable 
    // 默认定时器状态
    startState = false;

    @computed
    get startStateText(){
    	return !!this.startState?'暂停计时':'开始计时';
    }

    
    @action
    startOpenTime(ev){
        var self = this;

    	if(self.startState){

            clearInterval(self.timer);
            

        }else{
            self.timer = setInterval(() => {
                self.secondsPassed++;
            }, 100);
        }

        self.startState = !self.startState
    	
    }
    @action
    receiveCalcData(params=this.secondsPassed) {
		const self = this;
	
		return $.ajax({
			url:'/a',
			type:'json',
			error:function(){
				
				self.secondsPassed = params
			}
		})
	}
    
};



export default new timerData
