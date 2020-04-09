import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TopHolderService {
  toggleDrawer: EventEmitter<boolean> = new EventEmitter();
  constructor() { }

  openDrawer(): void {
    this.toggleDrawer.emit(true);
  }

  closeDrawer(): void {
    this.toggleDrawer.emit(false);
  }


}
