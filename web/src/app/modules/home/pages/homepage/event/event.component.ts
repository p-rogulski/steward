import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  @Input() title:string;
  info = '../../../../assets/img/info.png';
  constructor() { }

  ngOnInit(): void {
  }

}
