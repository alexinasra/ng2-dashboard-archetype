import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { CommonImportsModule } from '../share/common-imports.module';

import { AuthGuard } from './auth-guard.service';
import { DashboardLayoutModule } from './dashboard-layout/dashboard-layout.module';
import { DashboardComponent } from './dashboard.component';
import { IndexComponent } from './index/index.component';
import { EmptyPageComponent } from './empty-page/empty-page.component';
import { SettingsComponent } from './settings/settings.component';

const exportedComponents = [
  IndexComponent,
  DashboardComponent,
  EmptyPageComponent
];

const DashboardRoutes = [
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children:[
      {
        path:'',
        component: DashboardComponent,
        data: {
          title: 'Dashboard Index'
        },
        children:[
          {
            path:'',
            component:IndexComponent
          },
        ]
      },
      {
        path:'',
        component: DashboardComponent,
        data: {
          title: 'Settings'
        },
        children:[
          {
            path:'settings',
            component:SettingsComponent
          }
        ]
      },
      {
        path:'',
        component: DashboardComponent,
        data: {
          title: 'Empty Page'
        },
        children:[
          {
            path:'empty',
            component:EmptyPageComponent
          }
        ]
      }

    ]
  }
];

@NgModule({
    imports: [
      RouterModule.forChild(DashboardRoutes)
    ],
    exports: [
      RouterModule
    ]
})
export class DashboardRoutingModule {};

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CommonImportsModule,
    AgmCoreModule,
    NgbModule,
    DashboardLayoutModule,
    DashboardRoutingModule
  ],
  declarations: [
    exportedComponents,
    SettingsComponent,
  ],
  exports: [
    exportedComponents
  ],
  providers: [
    AuthGuard
  ]
})
export class DashboardModule { }
