import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { faBars, faChalkboard, faCog, faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigation implements AfterViewInit {
  bars = faBars;
  halkboard = faChalkboard
  cog = faCog;
  signInAlt=faSignInAlt;
  userPlus=faUserPlus;

  @ViewChild("topNavigationItems") topNavigationItems: ElementRef;

  toggleDropDown() {
    const menuItemsElement: HTMLElement = this.topNavigationItems.nativeElement;
    const menuIsOpen: boolean = menuItemsElement.classList.contains("top-navigation__items--open")

    if (menuIsOpen) {
      menuItemsElement.classList.remove("top-navigation__items--open");
    } else {
      menuItemsElement.classList.add("top-navigation__items--open");
    }
  }

  ngAfterViewInit() {
    console.log(this.topNavigationItems.nativeElement);
  }
}
