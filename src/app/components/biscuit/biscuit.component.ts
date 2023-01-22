import { getLocaleTimeFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-biscuit',
  templateUrl: './biscuit.component.html',
  styleUrls: ['./biscuit.component.scss']
})
export class BiscuitComponent implements OnInit {
  ngOnInit(): void {

  }
  isAlert: boolean = false;
  switch: boolean = false;
  onMode: boolean = false;
  pause: boolean = false;
  initTemp: number = 210;  // Init Temperature
  tempCurrent: number = 0;
  timeWork: number = 0
  tps: number = 5; //Change temperature per second
  timerId: any; // ID timers
  timerId2: any; // ID timers
  isHeaterOn: boolean = false;
  isMotorOn: boolean = false;
  status: string = 'Off';
  //Animation of cakes
  cake1: boolean = false;
  cake2: boolean = false;
  cake3: boolean = false;
  cake4: boolean = false;
  cake5: boolean = false;
  cake6: boolean = false;
  cake7: boolean = false;
  anim_pause: boolean = false;
  anim_resume: boolean = false;

  //function delay
  delay() {
    return new Promise(
      res => setTimeout(res, 2000)
    )
  }
  //Start extraction
  async startExtraction() {
    this.cake1 = true;
    await this.delay();
    this.cake2 = true;
    await this.delay();
    this.cake3 = true;
    await this.delay();
    this.cake4 = true;
    await this.delay();
    this.cake5 = true;
    await this.delay();
    this.cake6 = true;
    await this.delay();
    this.cake7 = true;
  }
  //Stop extraction
  async stopExtraction() {
    this.cake1 = false;
    await this.delay();
    this.cake2 = false;
    await this.delay();
    this.cake3 = false;
    await this.delay();
    this.cake4 = false;
    await this.delay();
    this.cake5 = false;
    await this.delay();
    this.cake6 = false;
    await this.delay();
    this.cake7 = false;
  }

  countTime() {
    this.timeWork++
  }

  switchOn() {

    this.tempCurrent == 0 ? this.tempCurrent = this.initTemp : this.tempCurrent
    this.status = 'On';
    if (!this.onMode && !this.pause && this.tempCurrent == this.initTemp) {
      this.timerId2 = setInterval(() => { this.countTime() }, 1000)
      this.switch = true;
      this.isHeaterOn = true;

      this.timerId = setInterval(() => {
        // Heat
        if (this.tempCurrent < 240 && this.switch && !this.onMode) {
          this.isHeaterOn = true;
          this.tempCurrent = this.tempCurrent + this.tps / 5
          // Motor is on and onMode
          if (this.tempCurrent >= 220 && !this.pause) {
            this.isMotorOn = true;
            this.startExtraction();
          }
          //overheat protection
        } else if (this.tempCurrent > 220) {
          this.onMode = true;
          this.isHeaterOn = false;
          this.tempCurrent = this.tempCurrent - this.tps / 5;
        } else if (this.switch == false) {
          if (this.tempCurrent > this.initTemp) { this.tempCurrent = this.tempCurrent - this.tps / 5 }
          // Stopping machine
          else {
            this.tempCurrent = this.initTemp;
            this.onMode = false;

            clearInterval(this.timerId);
            clearInterval(this.timerId2);
            this.timeWork = 0;
            this.switch = false
          }

        }
        else {
          this.onMode = false
          this.isHeaterOn = true
        }
        //-----------------------------

      }, 1000 / 5);
      // Turning on after Pause
    } else if (this.pause) {
      this.isMotorOn = true;
      this.pause = false
      // this.cake1 = true

      this.anim_pause = false;
      this.anim_resume = true;
    }
    //Machine is on now when you press On again
    else if (this.tempCurrent) {
      this.isAlert = true;
      setTimeout(() => this.isAlert = false, 3000);

    }
  }

  switchPause() {
    if (this.switch && this.timeWork > 12) {
      clearInterval(this.timerId2);
      this.status = 'Pause'
      this.pause = true
      this.isMotorOn = false
      this.anim_pause = true
      this.anim_resume = false
    } else {
      alert(' Machine is not on mode now. Wait...')
    }
  }

  switchOff() {
    this.status = 'Off'
    this.switch = false
    this.stopExtraction()
    setTimeout(() => {
      this.isHeaterOn = false;
      this.isMotorOn = false;
      this.onMode = false;
      this.pause = false
    }, 12000);
  }


}
