import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-sysleft-menu',
  templateUrl: './sysleft-menu.component.html',
  styleUrls: ['./sysleft-menu.component.css']
})
export class SysleftMenuComponent implements OnInit {
  leftStyle: any;
  constructor(private router: Router) { }

  ngOnInit() {
    const h = document.documentElement.scrollHeight||  document.documentElement.clientHeight || document.body.clientHeight;
    this.leftStyle = {  'height': (h - 100) + 'px' };
  }
  go(url){
    this.router.navigate([url]);
  }


}
