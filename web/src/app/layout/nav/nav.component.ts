import { Component, ElementRef, ViewChild, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent {
  @ViewChild('navItems') topnavItems: ElementRef;

  constructor(private renderer: Renderer2) {}

  toggleDropDown() {
    const menuItemsElement: HTMLElement = this.topnavItems.nativeElement;

    const menuIsOpen: boolean = menuItemsElement.classList.contains('nav__items--open');

    if (menuIsOpen) {
      this.renderer.removeClass(menuItemsElement, 'nav__items--open');
    } else {
      this.renderer.addClass(menuItemsElement, 'nav__items--open');
    }
  }
}
