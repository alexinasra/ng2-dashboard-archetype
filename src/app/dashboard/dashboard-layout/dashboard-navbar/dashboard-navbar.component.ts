import { Component, OnInit, Input } from '@angular/core';
import { ResponsiveUtilsService } from '../../../responsive-utils/responsive-utils.service'
@Component({
  selector: 'app-dashboard-navbar',
  templateUrl: './dashboard-navbar.component.html',
  styleUrls: ['./dashboard-navbar.component.scss']
})
export class DashboardNavbarComponent implements OnInit {

  @Input('title')
  public title:string;
  @Input('showTitle')
  public showTitle:boolean= true;
  constructor(private utils: ResponsiveUtilsService) {

  }

  ngOnInit() {
  }

}
