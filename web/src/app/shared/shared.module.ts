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
  faCode,
  faUserAlt,
  faCaretDown,
  faQuestionCircle
} from '@fortawesome/free-solid-svg-icons';

import { TopHolderComponent } from './top-holder/top-holder.component';
import { TopHolderService } from './top-holder/top-holder.service';
import { DropdownMenuService } from './dropdown-menu/dropdown-menu.service';
import { AvatarComponent } from './avatar/avatar.component';
import { DropDownMenuComponent } from './dropdown-menu/drop-down-menu.component';
import { ToolboxComponent } from './toolbox/toolbox.component';
import { DropdownItemComponent } from './dropdown-menu/dropdown-item/dropdown-item.component';

@NgModule({
  declarations: [TopHolderComponent, AvatarComponent, DropDownMenuComponent, ToolboxComponent, DropdownItemComponent],
  providers: [TopHolderService, DropdownMenuService],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  exports: [
    CommonModule,
    FontAwesomeModule,
    TopHolderComponent,
    AvatarComponent,
    DropDownMenuComponent,
    DropdownItemComponent
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
      faCode,
      faUserAlt,
      faCaretDown,
      faQuestionCircle
    );
  }
}
