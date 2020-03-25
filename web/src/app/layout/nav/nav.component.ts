import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { faBars, faChalkboard, faCog, faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements AfterViewInit {
  bars = faBars;
  halkboard = faChalkboard
  cog = faCog;
  signInAlt=faSignInAlt;
  userPlus=faUserPlus;

  @ViewChild("navItems") topnavItems: ElementRef;

  toggleDropDown() {
    const menuItemsElement: HTMLElement = this.topnavItems.nativeElement;
    const menuIsOpen: boolean = menuItemsElement.classList.contains("nav__items--open")

    if (menuIsOpen) {
      menuItemsElement.classList.remove("nav__items--open");
    } else {
      menuItemsElement.classList.add("nav__items--open");
    }
  }

  ngAfterViewInit() {
    console.log(this.topnavItems.nativeElement);
  }
}
