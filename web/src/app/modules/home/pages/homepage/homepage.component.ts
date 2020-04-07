import { Component, OnInit, Input } from '@angular/core';

@Component({
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  @Input() logoUrl = '';

  ngOnInit() {
    this.logoUrl = 'assets/img/keeper.png';
  }
}
