import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {
  @Input() src:string="../../../assets/img/avatar.png";
  constructor() { 
    
  }

  ngOnInit(): void {
    console.log(this.src,"src")
  }

}
