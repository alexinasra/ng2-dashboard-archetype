import {
  Directive,
  ElementRef,
  Output,
  HostListener,
  EventEmitter
} from '@angular/core';
import { ResponsiveUtilsService } from './responsive-utils.service';

@Directive({
  selector: '[appYSpy]'
})
export class YSpyDirective {

  private height:number;
  private intervalId;
  constructor(private el:ElementRef, private rservice: ResponsiveUtilsService) {
  }
  @HostListener('window:load', ['$event'])
  onWindowLoad(event) {
    this.height = event.currentTarget.innerHeight;
    this.rservice.height().next(this.height);
  }
  @HostListener('window:resize', ['$event'])
  onWindowResize(event) {
    if(this.intervalId) {
      clearTimeout(this.intervalId);
    }
    this.intervalId = setTimeout(() => {
      if(this.height === event.target.innerHeight){
        clearInterval(this.intervalId);
        return;
      }
      this.height = event.target.innerHeight;
      this.rservice.height().next(this.height);
    }, 600);
  }
}
