import { Component, OnInit, Input } from '@angular/core';


@Component({
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  @Input() logoUrl = '';

  termsAndConditons = '../../../assets/img/terms-and-conditions.png';
  books = '../../../assets/img/books.png';
  cake = '../../../assets/img/cake.png';
  compare = '../../../assets/img/compare.png';


  ngOnInit() {
    this.logoUrl = 'assets/img/keeper.png';
  }
}
