import { Injectable } from '@angular/core';
import * as Rx from 'rxjs';
@Injectable()
export class ResponsiveUtilsService {

  _width:Rx.Subject<number> = new Rx.Subject();
  _height: Rx.Subject<number> = new Rx.Subject();
  _breakpoint: Rx.Subject<string> = new Rx.Subject();
  constructor() {
    this.width().subscribe(
      (width) => {
        if(width>=1200){
          return this._breakpoint.next('xl');
        }
        if(width>=992){
          return this._breakpoint.next('lg');
        }
        if(width>=768){
          return this._breakpoint.next('md');
        }
        if(width>=544){
          return this._breakpoint.next('sm');
        }
        this._breakpoint.next('xs');
      }
    )
  }

  width() {
    return this._width;
  }
  height() {
    return this._height;
  }
  breakpoint () {
    return this._breakpoint;
  }
}
