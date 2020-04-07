import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faGithub,
  faTwitter,
  faDocker,
  faNode,
  faAngular,
} from '@fortawesome/free-brands-svg-icons';

import {
  faBlog,
  faBars,
  faEnvelope,
  faRocket,
  faPlug,
  faCog,
  faSignOutAlt,
  faProjectDiagram,
  faLightbulb,
  faUpload,
  faChevronDown,
  faTag,
  faThLarge,
  faDownload
} from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  exports: [
    CommonModule,
    FontAwesomeModule,
  ]
})

export class SharedModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faGithub,
      faTwitter,
      faDocker,
      faNode,
      faAngular,
      faBlog,
      faBars,
      faEnvelope,
      faRocket,
      faPlug,
      faCog,
      faSignOutAlt,
      faProjectDiagram,
      faLightbulb,
      faUpload,
      faChevronDown,
      faTag,
      faThLarge,
      faDownload
    );
  }
}
