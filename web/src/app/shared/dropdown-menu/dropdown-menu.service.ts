import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DropdownMenuService {
  private isMenuOpen = false;
  private toggleMenu: EventEmitter<boolean> = new EventEmitter();

  public get IsMenuOpen() {
    return this.isMenuOpen;
  }

  public get ToggleMenu() {
    return this.toggleMenu;
  }

  constructor() { }

  public openMenu(): void {
    this.isMenuOpen = true;
    this.toggleMenu.emit(this.isMenuOpen);
  }

  public closeMenu(): void {
    this.isMenuOpen = false;
    this.toggleMenu.emit(this.isMenuOpen);
  }

}
