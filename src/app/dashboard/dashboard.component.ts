import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Data } from '@angular/router';

interface DashboardPageData {
  title:string;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  title;
  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.data.map((d )=>(d as DashboardPageData).title).subscribe(title=> this.title = title);
  }

}
