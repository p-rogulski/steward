import { Component, OnInit } from '@angular/core';
import { faPlug, faCog, faSignOutAlt,IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-session-layout',
  templateUrl: './session-layout.component.html',
  styleUrls: ['./session-layout.component.scss']
})
export class SessionLayoutComponent implements OnInit {
  public plug: IconDefinition = faPlug;
  public cog: IconDefinition = faCog;
  public signOutAlt: IconDefinition = faSignOutAlt;

  constructor() { }

  ngOnInit(): void {
  }

}
