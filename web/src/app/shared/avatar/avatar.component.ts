import { Component, Input, AfterViewInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';

type Size = '1x' | '2x' | '3x';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements AfterViewInit {
  @Input() imgSrc: string;
  @Input() size: Size;
  @ViewChild('avatar') avatar: ElementRef;

  constructor(private renderer: Renderer2) {

  }
  ngAfterViewInit() {
    let avatarSize = 'regular';
    switch (this.size) {
      case '1x':
        avatarSize = 'small';
        break;
      case '2x':
        avatarSize = 'regular';
        break;
      case '3x':
        avatarSize = 'large';
        break;
      default:
        avatarSize = 'regular';
    }
    this.renderer.addClass(this.avatar.nativeElement, avatarSize);
  }

}
