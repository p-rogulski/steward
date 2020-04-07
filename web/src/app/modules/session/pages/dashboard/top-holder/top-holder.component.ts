import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngxs/store';
import { AddPlugin } from '../../../actions/dashboard.actions';
import { IPlugin } from 'src/app/data/models/plugin.model';

@Component({
  selector: 'app-top-holder',
  templateUrl: './top-holder.component.html',
  styleUrls: ['./top-holder.component.scss']
})
export class TopHolderComponent implements OnInit {
  public creationMode = false;

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

  create() {
    this.creationMode = true;
  }

  cancel() {
    this.creationMode = false;
  }
}
