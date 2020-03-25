import { Component, OnInit, Input } from '@angular/core';
import { faPlug } from '@fortawesome/free-solid-svg-icons';

@Component({
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  @Input() logoUrl: string = '';
  plug = '../../../assets/img/plug.png';
  books = '../../../assets/img/books.png';
  cake = '../../../assets/img/cake.png';
  compare = '../../../assets/img/compare.png';


  ngOnInit() {
    this.logoUrl = 'assets/img/keeper.png';
  }
}
