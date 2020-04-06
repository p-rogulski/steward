import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngxs/store';
import { faUpload, faPlug } from '@fortawesome/free-solid-svg-icons';
import { AddPlugin } from '../../../actions/dashboard.actions';
import { IPlugin } from 'src/app/data/models/plugin.model';

@Component({
  selector: 'app-top-holder',
  templateUrl: './top-holder.component.html',
  styleUrls: ['./top-holder.component.scss']
})
export class TopHolderComponent implements OnInit {
  public upload = faUpload;
  public plug = faPlug;
  constructor(private store: Store) { }

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
}
