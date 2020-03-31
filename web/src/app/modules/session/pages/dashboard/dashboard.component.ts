import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../../data/service/dashboard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  plugins: Observable<any>;
  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.getPlugins();
  }

  getPlugins(){
    this.plugins=this.dashboardService.getPlugins();
  }
}
