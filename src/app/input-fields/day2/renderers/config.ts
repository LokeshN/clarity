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
    children?: IConfig[];
}

export interface IRegisterConfig {
    name: string;
    id: string;
    context: string;
    parentId?: string;
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

export function Register(registerConfig: IRegisterConfig) {
    function findParent(parentId: string, parentConfig: Array<IConfig>): IConfig {
        if (!parentConfig || !parentId) {
            return null;
        }
        for (let i = 0; i < parentConfig.length; i++) {
            if (parentConfig[i].id === parentId) {
                return parentConfig[i];
            } else {
                let config: IConfig = findParent(parentId, parentConfig[i].children);
                if (config) {
                    return config;
                }
            }
        }

        return null;
    }

    return function (target: Function) {
        let  config: IConfig = {
                name: registerConfig.name,
                id: registerConfig.id,
                context: registerConfig.context,
                view: target
            };
        if (registerConfig.parentId) {
            //loop and find
            let parentConfig: IConfig = findParent(registerConfig.parentId, CONFIG);
            /*for (let i = 0; i < CONFIG.length; i++) {
                if (CONFIG[i].id === registerConfig.parentId) {
                    parentConfig = CONFIG[i];
                    break;
                }
            }*/
            if (!parentConfig.children) {
                parentConfig.children = [];
            }

            parentConfig.children.push(config);
        } else {
            CONFIG.push(config);
        }
    };
}

export let APP_CONFIG = new OpaqueToken("app.config");
