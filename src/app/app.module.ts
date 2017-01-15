//core
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

//brand
import { AgmCoreModule } from 'angular2-google-maps/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


//app
import { AppComponent } from './app.component';

//app modules
import { RoutingModule } from './routing/routing.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ResponsiveUtilsModule, ResponsiveUtilsService } from './responsive-utils/responsive-utils.module';





@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    //core imports ...
    BrowserModule,
    FormsModule,
    HttpModule,
    //brand imports ...
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDm6MlX6cwgXaRT0ZwOk-Oi79EDxOMjqbI'
    }),
    NgbModule.forRoot(),
    //app imports ...
    ResponsiveUtilsModule,
    RoutingModule,
    AuthenticationModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
