import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DropdownMenuService } from '@shared/dropdown-menu/dropdown-menu.service';

@Component({
  selector: 'app-session-layout',
  templateUrl: './session-layout.component.html',
  styleUrls: ['./session-layout.component.scss']
})
export class SessionLayoutComponent implements OnInit {
  constructor(private dropdownMenuService: DropdownMenuService, private router: Router) { }

  ngOnInit(): void {
  }

  handleAvatarClick(event: Event) {
    this.dropdownMenuService.IsMenuOpen ? this.dropdownMenuService.closeMenu() : this.dropdownMenuService.openMenu();
  }

  logout() {
    this.router.navigateByUrl('/auth/sign-in');
  }

}
