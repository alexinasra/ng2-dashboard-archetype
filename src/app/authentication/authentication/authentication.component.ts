import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  onLoginSuccess() {
    this.router.navigate(['dashboard']);
  }
  onLoginFailure() {
    console.log('login failed');
  }
}
