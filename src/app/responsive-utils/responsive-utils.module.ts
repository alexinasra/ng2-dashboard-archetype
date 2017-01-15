import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XSpyDirective } from './x-spy.directive';
import { YSpyDirective } from './y-spy.directive';
import { ResponsiveUtilsService } from './responsive-utils.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [XSpyDirective, YSpyDirective],
  declarations: [XSpyDirective, YSpyDirective],
  providers: [
    ResponsiveUtilsService
  ]
})
export class ResponsiveUtilsModule { }
export {
  ResponsiveUtilsService
}
