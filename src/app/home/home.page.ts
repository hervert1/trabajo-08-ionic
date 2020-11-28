import { Component } from '@angular/core';
import { clear } from 'console';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  //constructor() {}

  percent: number = 0;
  radius:number = 100;
  fullTime: any = '00:01:30';

  timer: any = false;
  progress: any = 0;
  minutes: number = 1;
  seconds: any = 30;

  elapsed:any = {
    h: '00',
    m: '00',
    s: '00'
  }

  overallTimer: any = false;

  startTime() {

    if(this.timer) {
      clearInterval(this.timer);
    }
    if(this.overallTimer) {
      this.progressTimer();
    }

    this.timer = false;
    this.percent = 0;
    this.progress = 0;

    let timeSplit = this.fullTime.split(':');
    this.minutes = timeSplit[1];
    this.seconds = timeSplit[2];


    let totlaSeconds = Math.floor(this.minutes * 60) + parseInt(this.seconds);

    this.timer = setInterval(() => {

      if(this.percent == this.radius)
        clearInterval(this.timer);

      this.percent = Math.floor((this.progress / totlaSeconds) * 100);
      this.progress++;
    }, 1000)
  }

  progressTimer(){
    let countDownDate = new Date();
    this.overallTimer = setInterval(() => {

      let now = new Date().getTime();
      let distance = now - countDownDate.getTime();

      this.elapsed.h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.elapsed.m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.elapsed.s = Math.floor((distance % (1000 * 60)) / 1000);
        

    })
  }

}
