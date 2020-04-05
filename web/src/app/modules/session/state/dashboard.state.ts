import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { DashboardService } from '../../../data/service/dashboard.service';
import { IPlugin } from '../../../data/models/plugin.model';
import { GetPlugins, AddPlugin, RemovePlugin } from '../actions/dashboard.actions';

export interface IDashboardStateModel {
    plugins: Array<IPlugin>;
}

@State<IDashboardStateModel>({
    name: 'plugins',
    defaults: {
        plugins: []
    }
})

@Injectable()
export class DashboardState {

    constructor(private dashboardService: DashboardService) { }

    @Selector()
    static plugins(state: IDashboardStateModel) {
        return state.plugins;
    }

    @Action(GetPlugins)
    getAll({ patchState }: StateContext<IDashboardStateModel>) {
        return this.dashboardService.getPlugins().pipe(tap((plugins) => patchState({ plugins })));
    }

    @Action(AddPlugin)
    add({ getState, patchState }: StateContext<IDashboardStateModel>, { payload }: AddPlugin) {
        const state = getState();
        patchState({
            plugins: [...state.plugins, payload]
        });
    }

    @Action(AddPlugin)
    remove({ getState, patchState }: StateContext<IDashboardStateModel>, { payload }: RemovePlugin) {
        patchState({
            plugins: getState().plugins.filter((plugin: IPlugin) => plugin.id !== payload)
        });
    }
}

