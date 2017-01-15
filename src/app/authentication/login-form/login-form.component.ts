import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { AuthenticateService } from '../authenticate.service';
import { Credential } from '../credential';
import { AuthenticationResponse } from '../authentication-response';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginTryCount = 0;

  @Output()
  onSuccess:EventEmitter<any> = new EventEmitter();
  @Output()
  onFailure:EventEmitter<AuthenticationResponse> = new EventEmitter();
  @Output()
  onError:EventEmitter<any> = new EventEmitter();
  constructor(private auth: AuthenticateService) { }

  ngOnInit() {
  }

  onSubmit(event) {
    this.auth.login({id:event.value.identity, password: event.value.password})
      .subscribe(
        response => {
          if((<AuthenticationResponse>response).code ==='LOGIN_SUCCESS') {
            this.onSuccess.emit(null);
          } else {
            this.onFailure.emit( (<AuthenticationResponse>response) );
          }
        },
        err =>{
          console.log(err);
          this.onError.emit(err)
        }
      );
  }

}
