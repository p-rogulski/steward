import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { PluginService } from '@app/data/service/plugin.service';


@Component({
  selector: 'app-plugin-details',
  templateUrl: './plugin-details.component.html',
  styleUrls: ['./plugin-details.component.scss']
})

export class PluginDetailsComponent implements OnInit, OnDestroy {
  pluginDetails: any;
  paramMapSubscription: Subscription;

  constructor(private pluginService: PluginService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.paramMapSubscription = this.activatedRoute.paramMap.subscribe((params) => {
      this.getDetails(Number(params.get('id')));
    });
  }

  ngOnDestroy() {
    this.paramMapSubscription.unsubscribe();
  }

  getDetails(id: number): void {
    this.pluginService.getPluginDetails(id).subscribe((pluginDetails) => {
      this.pluginDetails = pluginDetails;
    });
  }

}
