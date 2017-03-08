import {OpaqueToken} from "@angular/core";

//import {ScaleInActionComponent} from "../actions/scalein-action.component";
//import {ScaleOutActionComponent} from "../actions/scaleout-action.component";
import {DynamicLayoutComponent} from "../actions/dynamic/dynamic-layout-component";

export class Context {
    static STATIC: string = "STATIC";
    static DYNAMIC: string = "DYNAMIC";
    static FORMLESS: string = "FORMLESS";
}

export interface IConfig {
    name: string;
    id: string;
    context: string;
    view?: any;
}

export const CONFIG: Array<IConfig> = [
    /*{
        name: "SCALE IN",
        id: "SCALE_IN",
        context: Context.STATIC,
        view: ScaleInActionComponent
    },
    {
        name: "SCALE OUT",
        id: "SCALE_OUT",
        context: Context.STATIC,
        view: ScaleOutActionComponent
    },*/
    {
        name: "CHANGE LEASE",
        id: "CHANGE_LEASE",
        context: Context.DYNAMIC,
        view: DynamicLayoutComponent
    },
    {
        name: "SHUTDOWN",
        id: "SHUTDOWN",
        context: Context.FORMLESS
    }
];

export function Register(config: any) {
    return function (target: Function) {
        CONFIG.push(config);
    };
}

export let APP_CONFIG = new OpaqueToken("app.config");
