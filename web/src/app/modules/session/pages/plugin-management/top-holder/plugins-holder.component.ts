import { Component, OnInit , ViewEncapsulation} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngxs/store';
import { TopHolderService } from '@shared/top-holder/top-holder.service';
import { AddPlugin } from '../../../actions/plugin.actions';
import { IPlugin } from 'src/app/data/models/plugin.model';

@Component({
  selector: 'app-dashoard-holder',
  templateUrl: './plugins-holder.component.html',
  styleUrls: ['./plugins-holder.component.scss'],

})
export class PluginsHolderComponent implements OnInit {
  public creationMode = false;

  constructor(private store: Store, private topHolderService: TopHolderService) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    this.store.dispatch(new AddPlugin({
      id: 222,
      title: f.value.title,
      description: f.value.description,
      thumbnail: '',
    } as IPlugin));
  }

  create() {
    this.creationMode = true;
  }

  cancel() {
    console.log('cancel');
    this.topHolderService.closeDrawer();

  }
}
