import { Component, OnInit, OnDestroy, HostListener, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { DropdownMenuService } from './dropdown-menu.service';

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.scss']
})

export class DropDownMenuComponent implements OnInit, OnDestroy {
  toggleMenusubscription: Subscription ;
  isMenuOpen: boolean;
  constructor(private dropdownMenuService: DropdownMenuService, private elementRef: ElementRef) {}

  ngOnInit() {
    this.isMenuOpen = this.dropdownMenuService.IsMenuOpen;
    this.toggleMenusubscription = this.dropdownMenuService.ToggleMenu.subscribe((isOpen: boolean) => {
      this.isMenuOpen = isOpen;
    });
  }

  ngOnDestroy() {
    this.toggleMenusubscription.unsubscribe();
  }

  @HostListener('document:click', ['$event'])
  clickout(event: Event) {
    const nativeElement = this.elementRef.nativeElement;
    // You can close it only out of the parent element
    const isDropDownEvent =  nativeElement.parentElement.contains(event.target);

    if (!isDropDownEvent) {
      this.dropdownMenuService.closeMenu();
    }
  }

  toggleMenu(event: Event): void {
    event.stopPropagation();
    this.dropdownMenuService.IsMenuOpen ? this.dropdownMenuService.closeMenu() : this.dropdownMenuService.openMenu();
  }

}
