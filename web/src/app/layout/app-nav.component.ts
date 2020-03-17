import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.scss']
})
export class AppNavComponent implements AfterViewInit {
  faBars = faBars;
  @ViewChild("menuItems") menuItems: ElementRef;

  public toggleDropDownMenu() {
    const menuItemsElement: HTMLElement = this.menuItems.nativeElement;
    const menuIsOpen: boolean = menuItemsElement.classList.contains("menu__items--open")

    if (menuIsOpen) {
      menuItemsElement.classList.remove("menu__items--open");
    } else {
      menuItemsElement.classList.add("menu__items--open");
    }
  }

  ngAfterViewInit() {
    console.log(this.menuItems.nativeElement);
  }
}
