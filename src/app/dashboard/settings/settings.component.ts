import { Component, OnInit, HostListener } from '@angular/core';

declare const document:any;
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  @HostListener('window:load', ['$event'])
  onWindowLoad(event) {
    console.log(event);
  }
  onLanguageChange(lang){
    document.documentElement.lang = lang;//html[lang]
    if(lang==='ar') {
      //set layout rtl
      document.documentElement.dir = 'rtl';//html[dir]
    } else {
      //set lauout ltr
      document.documentElement.dir = 'ltr';//html[dir]
    }

  }
}
