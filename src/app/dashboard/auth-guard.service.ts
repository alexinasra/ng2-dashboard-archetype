import { Injectable }     from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild }    from '@angular/router';
import { AuthenticateService } from '../authentication/authenticate.service';
import { AuthenticationStatus } from '../authentication/authentication-status';
@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthenticateService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    console.log('AuthGuard#canActivate called');
    return new Promise((resolve, reject) => {
      this.auth.status().subscribe(
        status => {
          let authStatus = (<AuthenticationStatus> status);
          if(!authStatus.account) {
            this.router.navigate(['auth']);
            return resolve(false);
          }
          if(authStatus.account.roles.indexOf('Admin')>-1) {
            return resolve(true);
          }
          //unauthorized ...
          //do redirecict here .
          this.router.navigate(['unauthorized']);
          resolve(false);
        } ,
        err => reject(err)
      )
    });
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return this.canActivate(route, state);
  }

}
