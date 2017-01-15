import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationRoutingModule } from '../authentication/authentication.module';
import { DashboardRoutingModule } from '../dashboard/dashboard.module';

export const RootRoutes:Routes = [
  {
    path:'',
    pathMatch: 'full',
    redirectTo: '/auth'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(RootRoutes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class RoutingModule { }
