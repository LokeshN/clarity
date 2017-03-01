import {OpaqueToken} from "@angular/core";

import {ScaleInActionComponent} from "../actions/scalein-action.component";
import {ScaleOutActionComponent} from "../actions/scaleout-action.component";
import {DynamicLayoutComponent} from "../actions/dynamic/dynamic-layout-component";

export class Context {
    static STATIC: string = "STATIC";
    static DYNAMIC: string = "DYNAMIC";
    static FORMLESS: string = "FORMLESS";
}


export const CONFIG = {
    "SCALE_IN": {
                    name: "SCALE IN",
                    id: "SCALE_IN",
                    context: Context.STATIC,
                    view: ScaleInActionComponent
                },
    "SCALE_OUT": {
                     name: "SCALE OUT",
                     id: "SCALE_OUT",
                     context: Context.STATIC,
                     view: ScaleOutActionComponent
                 },
    "CHANGE_LEASE": {
                        name: "CHANGE LEASE",
                        id: "CHANGE_LEASE",
                        context: Context.DYNAMIC,
                        view: DynamicLayoutComponent
                    }

};

export let APP_CONFIG = new OpaqueToken("app.config");
