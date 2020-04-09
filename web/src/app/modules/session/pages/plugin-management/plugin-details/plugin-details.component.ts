import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PluginService } from '@app/data/service/plugin.service';

@Component({
  selector: 'app-plugin-details',
  templateUrl: './plugin-details.component.html',
  styleUrls: ['./plugin-details.component.scss']
})

export class PluginDetailsComponent implements OnInit {
  pluginDetails: any;
  constructor(private pluginService: PluginService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.getDetails(Number(params.get('id')));
    });
  }

  getDetails(id: number) {
    this.pluginService.getPluginDetails(id).subscribe((pluginDetails) => {
      this.pluginDetails = pluginDetails;
    });
  }

}
