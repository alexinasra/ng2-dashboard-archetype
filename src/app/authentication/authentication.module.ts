import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AuthenticateService } from './authenticate.service';

import { CommonImportsModule } from '../share/common-imports.module';
import { AuthenticationComponent } from './authentication/authentication.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';

const AuthenticationRoutes:Routes = [
  {
    path:'auth',
    component: AuthenticationComponent
  },
  {
    path:'unauthorized',
    component: UnauthorizedComponent
  }
]

@NgModule({
    imports: [
      RouterModule.forChild(AuthenticationRoutes)
    ],
    exports: [
      RouterModule
    ]
})
export class AuthenticationRoutingModule {};

@NgModule({
  imports: [
    CommonModule,
    CommonImportsModule,
    HttpModule,
    FormsModule,
    AuthenticationRoutingModule
  ],
  exports: [
    AuthenticationComponent, UnauthorizedComponent
  ],
  declarations: [
    AuthenticationComponent,
    LoginFormComponent,
    SignupFormComponent,
    UnauthorizedComponent
  ],
  providers: [
    AuthenticateService
  ]
})
export class AuthenticationModule { }
