import { Component, OnInit, Input } from '@angular/core';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-plugin',
  templateUrl: './plugin.component.html',
  styleUrls: ['./plugin.component.scss']
})
export class PluginComponent implements OnInit {
  @Input() title: string;
  @Input() thumbnail: string;
  @Input() description: string;
  bulb = faLightbulb;
  constructor() { }

  ngOnInit(): void {
  }

}
