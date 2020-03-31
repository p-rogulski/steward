import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-plugin',
  templateUrl: './plugin.component.html',
  styleUrls: ['./plugin.component.scss']
})
export class PluginComponent implements OnInit {
  @Input() id: string;
  @Input() title: string;
  @Input() thumbnail: string;
  @Input() description: string;
  bulb = faLightbulb;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public showDetails(event: Event): void {
    this.router.navigateByUrl('session/plugin/'+this.id);
  }

}
