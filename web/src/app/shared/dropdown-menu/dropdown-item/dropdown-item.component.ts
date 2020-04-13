import { Component, OnInit, Input, HostListener, ElementRef } from '@angular/core';
import { DropdownMenuService } from '../dropdown-menu.service';

@Component({
  selector: 'app-dropdown-item',
  templateUrl: './dropdown-item.component.html',
  styleUrls: ['./dropdown-item.component.scss']
})
export class DropdownItemComponent implements OnInit {
  @Input() icon: string;
  isSection: boolean;
  isSeparated: boolean;
  constructor(private dropdownMenuService: DropdownMenuService, private elementRef: ElementRef) { }

  ngOnInit(): void {
    const nativeElement: HTMLElement = this.elementRef.nativeElement;
    this.isSection = nativeElement.hasAttribute('section');
    this.isSeparated = nativeElement.hasAttribute('separated');
  }

  @HostListener('click', ['$event'])
  onClick(event) {
    event.stopPropagation();
    this.dropdownMenuService.closeMenu();
  }

}
