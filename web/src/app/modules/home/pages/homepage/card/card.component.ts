import { Component, OnInit, AfterViewInit, Input, ElementRef, ViewChild, Renderer2 } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit, AfterViewInit {
  @Input() color: string;
  @Input() icon: string;
  @Input() title: string;
  @ViewChild('cardHeader') header: ElementRef;


  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.renderer.setStyle(this.header.nativeElement, 'backgroundColor', this.color);
  }

}
