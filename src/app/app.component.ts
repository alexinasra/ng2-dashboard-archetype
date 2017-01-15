import { Component, HostBinding, HostListener } from '@angular/core';
import { ResponsiveUtilsService } from './responsive-utils/responsive-utils.service';

@Component({
  selector: 'app-root',
  template: `<div appXSpy appYSpy></div>
  <router-outlet></router-outlet>`,
})
export class AppComponent {

  documentLanguage = "en";
  documentDirection = "ltr";
  @HostBinding('class')
  breakPointClass:string = 'breakpoint-xs';
  constructor(private rservice:ResponsiveUtilsService){
    this.rservice.breakpoint().subscribe(
      breakpoint => {
        console.log(this.breakPointClass);
        this.breakPointClass = `breakpoint-`+breakpoint}
    );
  }
  @HostListener('window:load', ['$event'])
  onWindowLoad(event) {
    event.currentTarget.document.documentElement.lang = this.documentLanguage;//html[lang]
    event.currentTarget.document.documentElement.dir = this.documentDirection;//html[dir]
  }
}
