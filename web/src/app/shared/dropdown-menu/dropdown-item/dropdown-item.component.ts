import { Component, OnInit, Input, HostListener } from '@angular/core';
import { DropdownMenuService } from '../dropdown-menu.service';

@Component({
  selector: 'app-dropdown-item',
  templateUrl: './dropdown-item.component.html',
  styleUrls: ['./dropdown-item.component.scss']
})
export class DropdownItemComponent implements OnInit {
  @Input() icon: string;
  constructor(private dropdownMenuService: DropdownMenuService) { }

  ngOnInit(): void {
  }

  @HostListener('click', ['$event'])
  onClick(event) {
    event.stopPropagation();
    this.dropdownMenuService.closeMenu();
  }

}
