import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngxs/store';
import { TopHolderService } from '@shared/top-holder/top-holder.service';

@Component({
  selector: 'app-flow-holder',
  templateUrl: './flow-holder.component.html',
  styleUrls: ['./flow-holder.component.scss'],
})
export class FlowHolderComponent implements OnInit {
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
