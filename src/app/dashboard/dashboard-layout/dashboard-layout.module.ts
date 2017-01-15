import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ResponsiveUtilsModule } from '../../responsive-utils/responsive-utils.module';
import { DashboardNavbarComponent } from './dashboard-navbar/dashboard-navbar.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { DashboardSidebarComponent } from './dashboard-sidebar/dashboard-sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    ResponsiveUtilsModule
  ],
  exports: [DashboardNavbarComponent, DashboardPageComponent, DashboardSidebarComponent],
  declarations: [DashboardNavbarComponent, DashboardPageComponent, DashboardSidebarComponent]
})
export class DashboardLayoutModule { }
