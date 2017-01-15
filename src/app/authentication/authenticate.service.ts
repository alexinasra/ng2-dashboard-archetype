import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Credential } from './credential';
import { AuthenticationResponse } from './authentication-response';
import { AuthenticationStatus } from './authentication-status';
import * as Rx from 'rxjs';

@Injectable()
export class AuthenticateService {

  private _status: AuthenticationStatus = {
    account: undefined
  };

  constructor(private http:Http) { }

  login (credential:Credential): Rx.Observable<AuthenticationResponse> {
    return new Rx.Observable<AuthenticationResponse>(observer => {
      if(credential.id == "admin@foodle.co.il" && credential.password =="admin"){
        this._status = {
          account: {
            credential: {
              id: credential.id,
              userId: '333333',
              aliasTo: null
            },
            user: {
              id: '333333',
              firstName: "User",
              middleName: "",
              lastName: "Admin",
              birthdate: "19900101"
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
  logout (): Rx.Observable<AuthenticationStatus> {
    return new Rx.Observable<AuthenticationStatus>((observer) => {
      this._status.account = null;
      observer.next({
        code: 'LOGOUT_SUCCESS',
        message: 'user loged out successfuly .'
      });
      observer.complete();
    });
  }
}
