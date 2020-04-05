import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { faBlog, faBars, faEnvelope, faRocket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements AfterViewInit {
  blog = faBlog;
  bars = faBars;
  envelope = faEnvelope;
  rocket = faRocket;

  @ViewChild('navItems') topnavItems: ElementRef;

  toggleDropDown() {
    const menuItemsElement: HTMLElement = this.topnavItems.nativeElement;
    const menuIsOpen: boolean = menuItemsElement.classList.contains('nav__items--open');

    if (menuIsOpen) {
      menuItemsElement.classList.remove('nav__items--open');
    } else {
      menuItemsElement.classList.add('nav__items--open');
    }
  }

  ngAfterViewInit() {
    console.log(this.topnavItems.nativeElement);
  }
}
