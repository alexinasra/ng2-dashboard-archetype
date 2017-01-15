import {
  Directive,
  ElementRef,
  Output,
  HostListener,
  EventEmitter
} from '@angular/core';

import { ResponsiveUtilsService } from './responsive-utils.service';
@Directive({
  selector: '[appXSpy]',
})
export class XSpyDirective {

  private width:number;
  private intervalId;
  constructor(private el:ElementRef, private rservice: ResponsiveUtilsService) {
  }
  @HostListener('window:load', ['$event'])
  onWindowLoad(event) {
    this.width = event.currentTarget.innerWidth;
    this.rservice.width().next(this.width);
  }
  @HostListener('window:resize', ['$event'])
  onWindowResize(event) {
    if(this.intervalId) {
      clearTimeout(this.intervalId);
    }
    this.intervalId = setTimeout(() => {
      if(this.width === event.target.innerWidth){
        clearInterval(this.intervalId);
        return;
      }

      this.width = event.target.innerWidth;
      console.log(this.width)
      this.rservice.width().next(this.width);
    }, 100);
  }
}
