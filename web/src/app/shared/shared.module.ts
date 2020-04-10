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
  faDownload,
  faStoreAlt,
  faChevronUp,
  faCode
} from '@fortawesome/free-solid-svg-icons';

import { TopHolderComponent } from './top-holder/top-holder.component';
import { TopHolderService } from './top-holder/top-holder.service';

@NgModule({
  declarations: [TopHolderComponent],
  providers: [TopHolderService],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  exports: [
    CommonModule,
    FontAwesomeModule,
    TopHolderComponent
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
      faChevronUp,
      faTag,
      faThLarge,
      faDownload,
      faStoreAlt,
      faCode
    );
  }
}