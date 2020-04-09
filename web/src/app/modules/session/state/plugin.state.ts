import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { PluginService } from '@data/service/plugin.service';
import { IPlugin } from '@data/models/plugin.model';
import { GetPlugins, AddPlugin, RemovePlugin } from '../actions/plugin.actions';

export interface IPluginStateModel {
    plugins: Array<IPlugin>;
}

@State<IPluginStateModel>({
    name: 'plugins',
    defaults: {
        plugins: []
    }
})

@Injectable()
export class PluginState {

    constructor(private pluginService: PluginService) { }

    @Selector()
    static plugins(state: IPluginStateModel) {
        return state.plugins;
    }

    @Action(GetPlugins)
    getAll({ patchState }: StateContext<IPluginStateModel>) {
        return this.pluginService.getPlugins().pipe(tap((plugins) => patchState({ plugins })));
    }

    @Action(AddPlugin)
    add({ getState, patchState }: StateContext<IPluginStateModel>, { payload }: AddPlugin) {
        const state = getState();
        patchState({
            plugins: [...state.plugins, payload]
        });
    }

    @Action(AddPlugin)
    remove({ getState, patchState }: StateContext<IPluginStateModel>, { payload }: RemovePlugin) {
        patchState({
            plugins: getState().plugins.filter((plugin: IPlugin) => plugin.id !== payload)
        });
    }
}

