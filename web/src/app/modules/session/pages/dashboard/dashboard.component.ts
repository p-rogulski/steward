import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import {DashboardState} from '../../state/dashboard.state';
import { GetPlugins } from '../../actions/dashboard.actions';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @Select(DashboardState.plugins)
  plugins$: Observable<any>;
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.getPlugins();
  }

  getPlugins() {
    this.store.dispatch(new GetPlugins());
  }
}
