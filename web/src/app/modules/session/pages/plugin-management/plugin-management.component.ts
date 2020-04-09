import { Component, OnInit , ViewEncapsulation} from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { PluginState } from '../../state/plugin.state';
import { GetPlugins } from '../../actions/plugin.actions';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-plugin-management',
  templateUrl: './plugin-management.component.html',
  styleUrls: ['./plugin-management.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PluginManagementComponent implements OnInit {
  @Select(PluginState.plugins)
  plugins$: Observable<any>;
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.getPlugins();
  }

  getPlugins() {
    this.store.dispatch(new GetPlugins());
  }
}
