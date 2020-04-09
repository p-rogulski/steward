import { Component, OnInit, Input } from '@angular/core';
import { TopHolderService } from './top-holder.service';

@Component({
  selector: 'app-top-holder',
  templateUrl: './top-holder.component.html',
  styleUrls: ['./top-holder.component.scss']
})
export class TopHolderComponent implements OnInit {
  @Input() drawerButtonTitle: string;

  public drawerIsOpen = false;

  constructor(private topHolderService: TopHolderService) {
    this.topHolderService.toggleDrawer.subscribe((isOpen: boolean) => {
        this.toggleDrawer(isOpen);
    });
  }

  ngOnInit(): void {
  }

  toggleDrawer(isOpen: boolean) {
    this.drawerIsOpen = isOpen;
  }
}
