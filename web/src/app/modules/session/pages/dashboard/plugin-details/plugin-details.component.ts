import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboardService } from '../../../../../data/service/dashboard.service';

@Component({
  selector: 'app-plugin-details',
  templateUrl: './plugin-details.component.html',
  styleUrls: ['./plugin-details.component.scss']
})
export class PluginDetailsComponent implements OnInit {
  pluginDetails: any;
  constructor(private dashboardService: DashboardService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.getDetails(Number(params.get('id')));
    })
  }

  getDetails(id: number) {
    this.dashboardService.getPluginDetails(id).subscribe((pluginDetails) => {
      this.pluginDetails = pluginDetails;
    })
  }

}
