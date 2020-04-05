import { Component, OnInit } from '@angular/core';
import { faBlog, faBars, faEnvelope, faRocket, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss']
})

export class HomeLayoutComponent implements OnInit {
  public blog: IconDefinition = faBlog;
  public bars: IconDefinition = faBars;
  public envelope: IconDefinition = faEnvelope;
  public rocket: IconDefinition = faRocket;

  constructor() { }

  ngOnInit(): void {
  }

}
