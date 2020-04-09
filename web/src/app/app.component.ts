import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @Input() logoUrl = '';
  title = 'steward';

  ngOnInit() {
    this.logoUrl = 'assets/img/keeper.png';
  }

}
