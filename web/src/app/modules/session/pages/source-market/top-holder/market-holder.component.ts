import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngxs/store';
import { TopHolderService } from '@shared/top-holder/top-holder.service';

@Component({
  selector: 'app-market-holder',
  templateUrl: './market-holder.component.html',
  styleUrls: ['./market-holder.component.scss'],
})
export class MarketHolderComponent implements OnInit {
  public creationMode = false;

  constructor(private store: Store, private topHolderService: TopHolderService) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
  }

  cancel() {
    this.topHolderService.closeDrawer();
  }
}
