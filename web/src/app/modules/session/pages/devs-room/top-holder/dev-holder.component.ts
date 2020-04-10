import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngxs/store';
import { TopHolderService } from '@shared/top-holder/top-holder.service';

@Component({
  selector: 'app-dev-holder',
  templateUrl: './dev-holder.component.html',
  styleUrls: ['./dev-holder.component.scss'],
})
export class DevHolderComponent implements OnInit {
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
