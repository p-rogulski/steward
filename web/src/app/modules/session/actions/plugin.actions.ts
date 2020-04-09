import { IPlugin, IPluginDetails } from '@data/models/plugin.model';

export class GetPlugins {
    static readonly type = '[PLUGIN] GetAll';
    constructor() {}
}

export class GetPluginDetails {
    static readonly type = '[PLUGIN] GetDetails';
    constructor(public payload: IPluginDetails) {}
}

export class AddPlugin {
    static readonly type = '[PLUGIN] Add';
    constructor(public payload: IPlugin) {}
}


export class RemovePlugin {
    static readonly type = '[PLUGIN] Remove';
    constructor(public payload: number) {}
}
