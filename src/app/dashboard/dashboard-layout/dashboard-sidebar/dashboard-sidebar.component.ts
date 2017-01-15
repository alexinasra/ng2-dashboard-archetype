import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from '../../../authentication/authenticate.service';
import * as Rx from 'rxjs';
@Component({
  selector: 'app-dashboard-sidebar',
  templateUrl: './dashboard-sidebar.component.html',
  styleUrls: ['./dashboard-sidebar.component.scss']
})
export class DashboardSidebarComponent implements OnInit {

  timeSubject = new Rx.Subject<string>();
  time:string;
  private clockInterval;
  constructor(private auth: AuthenticateService, private router:Router) { }

  ngOnInit() {
    this.startClock();
    this.timeSubject.subscribe(time => this.time = time);
  }
  startClock() {
    if(!this.clockInterval){
      this.clockInterval = setInterval(() => this.timeSubject.next((new Date()).toLocaleTimeString()), 1000);
    }
  }
  stopClock() {
    clearInterval(this.clockInterval);
    this.clockInterval = 0;
  }

  logout() {
    this.auth.logout().subscribe(
      () => this.router.navigate(['auth'])
    );
  }
}
