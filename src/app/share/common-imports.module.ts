
import { NgModule } from '@angular/core';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  exports:[
    AgmCoreModule,
    NgbModule
  ]
})
export class CommonImportsModule{};
