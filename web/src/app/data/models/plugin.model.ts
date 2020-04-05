const enum Status {
    Stoped = 0,
    Running = 1,
    Waiting = 2,
    Crashed = 3
}

interface ITraficData {
    type: string;
    data?: Array<number | string>;
}

interface IReliability {
    pofod: number;
    mttf: number;
    avail: number;
    rocof: number;
}

interface ITraffic {
    xAxis: ITraficData;
    yAxis: ITraficData;
    series: Array<ITraficData>;
}

export interface IPlugin {
    id: number;
    title: string;
    status: Status;
    description: string;
    thumbnail: string;
    createdBy: string;
    createdAt: Date;
}

export interface IPluginDetails extends IPlugin {
    reliability: IReliability;
    traffic: ITraffic;
}
