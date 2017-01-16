import { Injectable } from '@angular/core';
import { AuthenticationResponse } from './authentication-response';
import { AuthenticationStatus } from './authentication-status';

import { LoginData } from './login-data';
import { Credential, Account, BackendResponse } from '../core';
import * as Rx from 'rxjs';


@Injectable()
export class AuthenticateService {

  private _status: AuthenticationStatus = {
    account: undefined
  };

  constructor() { }

  login (loginData: LoginData): Rx.Observable<BackendResponse> {
    return new Rx.Observable<BackendResponse>(observer => {
      if(loginData.id == "admin@foodle.co.il" && loginData.password =="admin"){
        this._status = {
          account: {
            credential: {
              id: loginData.id,
              userId: '333333'
            },
            user: {
              id: '333333',
              firstName: "User",
              middleName: "",
              lastName: "Admin",
              birthdate: new Date("19900101")
            },
            roles: ['Admin']
          }
        };

        observer.next({ code: "LOGIN_SUCCESS", message: '' });
        observer.complete();
      } else {
        this._status.account = null;
        observer.next({ code: "LOGIN_FAILED", message: '' });
        observer.complete();
      }
    });
  }
  status () : Rx.Observable<AuthenticationStatus> {
    return new Rx.Observable<AuthenticationStatus>((observer) => {
      observer.next(this._status);
      observer.complete();
    });
  }
  logout (): Rx.Observable<BackendResponse> {
    return new Rx.Observable<BackendResponse>((observer) => {
      this._status.account = null;
      observer.next({
        code: 'LOGOUT_SUCCESS',
        message: 'user loged out successfuly .'
      });
      observer.complete();
    });
  }
}
