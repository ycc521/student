import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainframe',
  templateUrl: './mainframe.component.html',
  styleUrls: ['./mainframe.component.css']
})
export class MainframeComponent implements OnInit {
  nowDate: string = '';
  noweek: string = '';
  nowTime: string = '';
  constructor() { }

  ngOnInit() {
    let now = new Date();
    var week;
    if (new Date().getDay() == 0) week = "星期日";
    if (new Date().getDay() == 1) week = "星期一";
    if (new Date().getDay() == 2) week = "星期二";
    if (new Date().getDay() == 3) week = "星期三";
    if (new Date().getDay() == 4) week = "星期四";
    if (new Date().getDay() == 5) week = "星期五";
    if (new Date().getDay() == 6) week = "星期六";
    this.nowDate = now.getFullYear() + '年' + (now.getMonth() + 1) + '月' + now.getDate() + "日  " ;
    this.noweek = week;
  }

}
